import Joi from 'joi';

const cardDataSchema = Joi.object({
  employeeId: Joi.number().min(1).required(),
  number: Joi.string().trim().length(16).required(),
  cardholderName: Joi.string().trim().max(64).required(),
  securityCode: Joi.string().trim().min(3).max(4).required(),
  isVirtual: Joi.boolean().required(),
  originalCardId: Joi.number().min(1).allow(null),
  isBlocked: Joi.boolean().required(),
  type: Joi.string().trim().required(),
});

export default cardDataSchema;
