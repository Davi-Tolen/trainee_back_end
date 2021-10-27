const express = require('express');
const routes = express.Router();

const UserController = require("./controllers/UserController");
const DoctorController = require("./controllers/DoctorController");
const ConsultationController = require("./controllers/ConsultationController");

// User
routes.get("/user/:user_id", UserController.getById);
routes.post("/user", UserController.create);
routes.put("/user/:user_id", UserController.update);
routes.delete("/user/:user_id", UserController.delete);

//Doctor
routes.get("/doctor/:doctor_id", DoctorController.getById);
routes.post("/doctor", DoctorController.create);
routes.put("/doctor/:doctor_id", DoctorController.update);
routes.delete("/doctor/:doctor_id", DoctorController.delete);

//Consultation
routes.post("/consultation", ConsultationController.create);
routes.get("/consultation", ConsultationController.getByUser);
routes.put("/consultation/:consultation_id", ConsultationController.update);
routes.delete("/consultation/:consultation_id", ConsultationController.delete);


module.exports = routes;
