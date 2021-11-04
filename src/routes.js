const express = require('express');
const routes = express.Router();

const auth = require("./middlewares/authentication");

const UserController = require("./controllers/UserController");
const UserValidator = require("./validators/UserValidator");

const DoctorController = require("./controllers/DoctorController");
const DoctorValidator= require("./validators/DoctorValidator");

const ConsultationController = require("./controllers/ConsultationController");
const ConsultationValidator = require("./validators/ConsultationValidator");

const SessionController = require("./controllers/SessionController");

//  Session
routes.post("/login", SessionController.signIn);

// User
routes.get("/user/:user_id", UserValidator.getById, UserController.getById);
routes.post("/user", UserValidator.create, UserController.create);
routes.put("/user/:user_id", UserValidator.update, UserController.update);
routes.delete("/user/:user_id", UserValidator.delete, UserController.delete);

//Doctor
routes.get("/doctor/:doctor_id", DoctorValidator.getById, DoctorController.getById);
routes.post("/doctor", DoctorValidator.create, DoctorController.create);
routes.put("/doctor/:doctor_id", DoctorValidator.update, DoctorController.update);
routes.delete("/doctor/:doctor_id", DoctorValidator.delete, DoctorController.delete);

//Consultation
routes.post("/consultation", ConsultationValidator.create, auth.authenticateToken, ConsultationController.create);
routes.get("/consultation/:user_id",  auth.authenticateToken, ConsultationController.getByUser);
routes.put("/consultation/:consultation_id", ConsultationValidator.update, auth.authenticateToken, ConsultationController.update);
routes.delete("/consultation/:consultation_id", ConsultationValidator.delete, auth.authenticateToken, ConsultationController.delete);


module.exports = routes;
