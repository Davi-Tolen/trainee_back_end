const { v4: uuidv4 } = require('uuid');
const connection = require("../database/connection");

module.exports = {
  async create (consultation) {
    const consultation_id = uuidv4();
    consultation.consultation_id = consultation_id;

    const result = await connection("consultation").insert(consultation);
    return result;
  },

  async getById({consultation_id, user_id, doctor_id}) {
    const result = await connection("consultation").where({consultation_id, user_id, doctor_id}).select("*");
    return result;
  },

  async updateById(consultation_id, consultation) {
    const result = await connection("consultation").where(consultation_id).update(consultation);
    return result;
  },

  async deleteById(consultation_id){
    const result = await connection("consultation").where({consultation_id}).delete();
    return result;
  },
}