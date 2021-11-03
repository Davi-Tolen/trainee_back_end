const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().min(1).max(80).required(),
      email: Joi.string().email().min(1).max(100).required(),
      phone: Joi.string().required(),
      adress: Joi.string().min(1).max(100).required(),
      birthdate: Joi.date().required(),
      password: Joi.string().min(6).max(20).required(),
    }),
  }),
  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string()
        .guid({ version: ["uuidv4"] })
        .required(),
    }),
  }),
  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string()
        .guid({ version: ["uuidv4"] })
        .required(),
    }),
    [Segments.BODY]: Joi.object()
      .keys({
        name: Joi.string().min(1).max(80).optional(),
        email: Joi.string().email().min(1).max(100).optional(),
        phone: Joi.number().optional(),
        adress: Joi.string().min(1).max(100).optional(),
        birthdate: Joi.date().optional(),
        password: Joi.string().min(1).max(20).optional(),
      })
      .min(1),
  }),
  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string()
        .guid({ version: ["uuidv4"] })
        .required(),
    }),
  }),
};