const { v4: uuidv4 } = require('uuid');
const connection = require("../database/connection");

module.exports = {
  async create(doctor) {
    const doctor_id = uuidv4();
    doctor.doctor_id = doctor_id;
    
    const result = await connection("doctor").insert(doctor);
    return doctor_id;
  },

  async getById(doctor_id){
    const result = await connection("doctor").where({doctor_id}).select("*");
    return result;
  },

  async updateById(doctor_id, doctor){
    const result = await connection("doctor").where({doctor_id}).update(doctor);
    return result;
  },

  async deleteById(doctor_id){
    const result = await connection("doctor").where({doctor_id}).delete();
    return result;
  },
}