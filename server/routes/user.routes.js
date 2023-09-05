const db = require("../ultils/database");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await db.execute("select * from users");
    res.json({
      users: users[0],
      message: "get all user",
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await db.execute("select * from users where userId = ?", [id]);
    res.json({
      user: user[0],
      message: "get user",
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newUser = await db.execute(
      "insert into users (name, email, age) values (?,?,?)",
      [name, email, age]
    );

    if (newUser[0].affectedRows > 0) {
      res.json({
        message: "create user success",
      });
    }
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;
    const user = await db.execute(
      "update users set name = ?, email = ?, age = ? where userId = ?",
      [name, email, age, id]
    );
    if (user[0].affectedRows > 0) {
      res.json({
        message: "update user success",
      });
    }
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await db.execute("delete from users where userId = ?", [id]);
    if (user[0].affectedRows > 0) {
      res.json({
        message: "delete user success",
      });
    }
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

module.exports = router;
