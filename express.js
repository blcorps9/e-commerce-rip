const fs = require("fs");
const path = require("path");
const cors = require("cors");
const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const appPort = Number(process.env.APP_PORT || 3000);

const JWT_SECRET = "&5#1&1J@f4H3B~2u4$gJ";

app.use(express.static(path.join(__dirname, "dist")));

app.use(cors({ origin: "http://localhost:8089" }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(cookieParser());

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == "x" ? r : (r & 0x3) | 0x8;

    return v.toString(16);
  });
}

const dbPath = path.join(__dirname, "db.json");
function readStore(cb) {
  return fs.readFile(dbPath, (err, data) => {
    if (err) return cb(err);

    try {
      data = JSON.parse(data);

      return cb(null, data);
    } catch (err) {
      return cb(err);
    }
  });
}
function writeToStore(data, cb) {
  return fs.writeFile(dbPath, JSON.stringify(data), cb);
}

function genToken(profile) {
  return jwt.sign(profile, JWT_SECRET, { expiresIn: "1d" });
}
// Middleware for auth
function checkAuth(req, res, next) {
  const { cookies } = req;

  jwt.verify(cookies.token, JWT_SECRET, (err, profile) => {
    if (err) {
      return res.send({ status: 401, message: "Invalid Token" });
    }

    req.user = profile;

    next();
  });
}

app.post("/api/register", (req, res) => {
  const { body } = req;

  if (body.password === body.confirmPassword) {
    const profile = {
      username: body.username,
      email: body.email,
      userId: uuidv4(),
    };

    readStore((err, store) => {
      if (err) {
        return res.send({
          status: 500,
          data: {
            message: "Something went wrong",
          },
        });
      }

      const users = store.users || [];
      const existingUser = users.find((u) => u.email === body.email);

      if (existingUser) {
        return res.send({
          status: 401,
          data: {
            message: "Email is already taken",
          },
        });
      }

      writeToStore(
        {
          ...store,
          users: [...users, { ...profile, password: body.password }],
        },
        (err) => {
          if (err) {
            return res.send({
              status: 500,
              data: {
                message: "Something went wrong",
              },
            });
          }

          const token = genToken(profile);

          res.cookie("token", token);

          return res.send({
            status: 201,
            data: {
              message: "Your profile has been created successfully.",
              profile,
            },
          });
        }
      );
    });
  } else {
    return res.send({
      status: 401,
      data: {
        message: "Password and Confirm password should match.",
      },
    });
  }
});

app.post("/api/login", (req, res) => {
  const { body } = req;

  if (body.password && body.username) {
    readStore((err, store) => {
      if (err) {
        return res.send({
          status: 500,
          data: {
            message: "Something went wrong",
          },
        });
      }

      const users = store.users || [];
      const existingUser = users.find(
        (u) => u.username === body.username && u.password === body.password
      );

      if (existingUser) {
        const profile = {
          email: existingUser.email,
          username: existingUser.username,
          userId: existingUser.userId,
        };

        const token = genToken(profile);

        res.cookie("token", token);

        return res.send({
          status: 200,
          data: {
            message: "You are logged in successfully.",
            profile,
          },
        });
      }

      return res.send({
        status: 401,
        data: {
          message: "Your username and/or password is wrong.",
          profile: {},
        },
      });
    });
  } else {
    return res.send({
      status: 401,
      data: {
        message: "Username or Password is missing.",
      },
    });
  }
});

app.post("/api/forgotPassword", (req, res) => {
  const { body } = req;

  if (body.email) {
    readStore((err, store) => {
      if (err) {
        return res.send({
          status: 500,
          data: {
            message: "Something went wrong",
          },
        });
      }

      const users = store.users || [];
      const existingUser = users.find((u) => u.email === body.email);

      return res.send({
        status: 200,
        data: {
          message:
            "Your temporary profile password is sent to your registered email.",
          profile: existingUser || {},
        },
      });
    });
  } else {
    return res.send({
      status: 401,
      data: {
        message: "Username is missing.",
      },
    });
  }
});

app.get("/api/inventory", (req, res) => {
  return readStore((err, store) => {
    if (err) {
      return res.send({
        status: 500,
        data: {
          message: "Something went wrong",
        },
      });
    }

    const { query } = req;
    let products = store.products;

    if (query.search) {
      const _query = query.search.toLowerCase();

      products = products.filter((product) => {
        const { name, tags, categories } = product;
        const _tags = tags.join(" ");
        const _categories = categories.join(" ");
        const _queryStr = `${name} ${_tags} ${_categories}`.toLowerCase();

        return _queryStr.indexOf(_query) > -1;
      });
    }

    return res.send({
      status: 200,
      data: products,
    });
  });
});

app.get("/api/user/init", checkAuth, () => {});
app.get("/api/user/init2", checkAuth, () => {});
app.get("/api/user/init3", checkAuth, () => {});

app.listen(appPort, (err) => {
  if (err) throw err;

  console.log(`App is running on ${appPort}`);
});
