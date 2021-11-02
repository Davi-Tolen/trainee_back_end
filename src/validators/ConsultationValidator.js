const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      date: Joi.date().required(),
      hour: Joi.string().required(),
    }),
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
  }),

  update: celebrate({
    [Segments.BODY]: Joi.object().keys({
      date: Joi.date().optional(),
      hour: Joi.string().optional(),
    }),
  }),
  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      consultattion_id: Joi.string()
        .guid({ version: ["uuidv4"] })
        .required(),
    }),
  }),
};