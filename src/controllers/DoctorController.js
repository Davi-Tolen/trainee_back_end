const DoctorModel = require("../models/DoctorModel");

module.exports = {
  async create(request, response){
    try {
      const newDoctor = request.body;

      const result = await DoctorModel.create(newDoctor);

      return response.status(200).json({doctor_id: result});

    } catch (error) {
      console.warn("Doctor creation failed", error);

      return response.status(500).json({
        notification: "Internal server error while trying to create Doctor",
      })
    }
  },

  async  getById(request, response){
    try {
      const { doctor_id } = request.params;
      const result = await DoctorModel.getById(doctor_id);

      return response.status(200).json(result);

    } catch (error) {
      console.log("Doctor getById failed" + error);

      return response.status(500).json({
        notification: "Internal server error while trying to get Doctor",
      })
    }
  },

  async update(request, response){
    try {
      const { doctor_id } = request.params;
      const doctor = request.body;
      const result = await DoctorModel.updateById(doctor_id, doctor);

      return response.status(200).json(result);
    } catch (error) {
      console.log("Doctor update failed" + error);

      return response.status(500).json({
        notification: "Internal server error while trying to update Doctor",
      })
    }
  },

  async delete(request, response){
    try {
      const { doctor_id } = request.params;
      const result = await DoctorModel.deleteById(doctor_id);
 
      if (result === 0) return response.status(400).json({notification: "note_id not found"});
      
      return response.status(200).json(result);
  
    } catch (error) {
      console.log("Doctor delete failed" + error);

      return response.status(500).json({
        notification: "Internal server error while trying to delete Doctor",
      })
    }
  },

  
}