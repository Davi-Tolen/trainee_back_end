const Firebase = require("../utils/Firebase");
const firebase = require("firebase/app");
const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const { deleteFirebaseuser } = require("../utils/Firebase");
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
};
