const express = require("express");
const ErrorHandler = require("../ErrorHandle/errorHandle");
const route = express.Router();

route.post("/user", (req, res, next) => {
  const { name, email, phoneno, gender, hobbies } = req.body;
  try {
    //name
    if (name) {
      if (!(name.length >= 5)) {
        return next(
          new ErrorHandler("name must be greater than 5 letters", "name", 404)
        );
      }
    } else {
      return next(new ErrorHandler("name cannot be empty", "name", 404));
    }
    //email
    if (email) {
      const Validateemail = email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      if (!Validateemail) {
        return next(
          new ErrorHandler("this is the invalid email", "email", 404)
        );
      }
    } else {
      return next(new ErrorHandler("email cannot be empty", "email", 404));
    }
    //phone no
    if (phoneno) {
      if (phoneno.length === 10) {
        if (!phoneno.match(/^[0-9]+$/)) {
          return next(
            new ErrorHandler("phoneno should be numberic", "phoneno", 404)
          );
        }
      } else {
        return next(
          new ErrorHandler(
            "phoneno cannot be less than or equal 10 digits",
            "phoneno",
            404
          )
        );
      }
    } else {
      return next(new ErrorHandler("phoneno cannot be empty", "phoneno", 404));
    }
    //gender
    console.log("gender==", gender);
    if (!gender) {
      return next(
        new ErrorHandler(
          "gender can be only male, feamle or others",
          "gender",
          404
        )
      );
    }
    //hobbies
    if (!hobbies.length) {
      return next(
        new ErrorHandler("this cann`t be empty select any one", "hobbies", 404)
      );
    }
    res
      .status(200)
      .json({ message: "the data is successfully collected", type: "pass" });
  } catch (error) {
    res.status(400).send(error);
  }
});
module.exports = route;
