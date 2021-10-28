const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().min(1).max(80).required(),
      descript: Joi.string().min(1).max(300).required(),
      coust: Joi.string().min(1).max(20).required(),
    }) 
  }),
  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      doctor_id: Joi.string().guid({ version: ["uuidv4"]}).required(),
    })
  }),
  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      doctor_id: Joi.string().guid({ version: ["uuidv4"]}).required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().min(1).max(80).optional(),
      descript: Joi.string().min(1).max(300).optional(),
      coust: Joi.string().min(1).max(20).optional(),
    }).min(1),
  }),
  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      doctor_id: Joi.string().guid({ version: ["uuidv4"]}).required(),
    }),
  })
}