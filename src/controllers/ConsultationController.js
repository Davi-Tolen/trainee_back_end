const ConsultationModel = require("../models/ConsultationModel");


module.exports = {
  async create(request, response){
    try {
      const newConsultation = request.body;

      const result = await ConsultationModel.create(newConsultation);

      return response.status(200).json({doctor_id: result});
    } catch (error) {
      console.warn("Consultation creation failed", error);

      return response.status(500).json({
        notification: "Internal server error while trying to create Consultation",
      })
    }
  },

  async getByUser(request, response){
    try {
      const { user_id } = request.params;
      const result = await ConsultationModel.getByUser(user_id);
      
      return response.status(200).json(result);

    } catch (error) {
      console.log("Consultation getByUser failed" + error);

      return response.status(500).json({
        notification: "Internal server error while trying to get Consultation",
      })
    }
  },

  async update(request, response){
    try {
      const { consultation_id } = request.params;
      const consultation = request.body;
      const result = await ConsultationModel.updateById(consultation_id, consultation);

      return response.status(200).json(result);
    } catch (error) {
      console.log("Consultation update failed" + error);

      return response.status(500).json({
        notification: "Internal server error while trying to update Consultation",
      })
    }
  },

  async delete(request, response){
    try {
      const { consultation_id } = request.params;
      const result = await ConsultationModel.deleteById(consultation_id);
 
      if (result === 0) return response.status(400).json({notification: "note_id not found"});
      
      return response.status(200).json(result);
  
    } catch (error) {
      console.log("Consultation delete failed" + error);

      return response.status(500).json({
        notification: "Internal server error while trying to delete Consultation",
      })
    }
  },

  

}