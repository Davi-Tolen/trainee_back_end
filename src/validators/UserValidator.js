const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      phone: Joi.string().required(),
      adress: Joi.string().required(),
      birthdate: Joi.date().required(),
      password: Joi.string().required(),
    })
  }),
  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().guid({ version: ["uuidv4"]}).required(),
    })
  }),
  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().guid({ version: ["uuidv4"]}).required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().optional(),
      email: Joi.string().email().optional(),
      phone: Joi.string().optional(),
      adress: Joi.string().optional(),
      birthdate: Joi.date().optional(),
      password: Joi.string().optional(),
    }).min(1),
  }),
  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().guid({ version: ["uuidv4"]}).required(),
    }),
  })
}