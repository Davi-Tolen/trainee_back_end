const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      descript: Joi.string().required(),
      coust: Joi.number().required(),
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
      name: Joi.string().optional(),
      descript: Joi.string().optional(),
      coust: Joi.number().optional(),
    }).min(1),
  }),
  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      doctor_id: Joi.string().guid({ version: ["uuidv4"]}).required(),
    }),
  })
}