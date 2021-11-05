const Firebase = require("../utils/Firebase");
const firebase = require("firebase/app");
const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const { deleteFirebaseuser } = require("../utils/Firebase");
const { application, response } = require("express");
const UserController = require("./UserController");
require("firebase/auth");

module.exports = {
  async signIn(request, response) {
    try {
      const { email, password } = request.body;
      let firebaseId;
      try {
        firebaseId = await Firebase.login(email, password);
      } catch (error) {
        console.warn(error);
        return response
          .status(403)
          .json({ notification: "Ivalid Credentials" });
      }

      const user = await UserModel.getByFields({ firebase_id: firebaseId });

      const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET);

      return response.status(200).json({ user, accessToken });
    } catch (error) {
      return response
        .status(500)
        .json({ notification: "Error while trying to validate credentials" });
    }
  },
  async deleteFirebaseUser(request, response) {
    try {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          const user = firebase.auth().currentUser;
          user.delete();
        }
      });
    } catch (error) {}
  },
  async updateFirebaseUser(request, response) {
    try {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          const user = firebase.auth().currentUser;

          user.updateEmail(request.body.emailadress);
          return response.status(200).json({ message: "Email Atualizado!" });
        }
      });
    } catch (error) {
      console.error(err.code);
      if (err.code === "auth/user-not-found") {
        return response.status(404).json({
          message: "This email is invalid!",
        });
      }
      return response.status(500).json({
        notification: "Internal server error while trying to change data user",
      });
    }
  },
 
};
