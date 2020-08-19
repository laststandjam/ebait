const Joi = require("@hapi/joi");

//register validation
const registerValidation = async data => {
    const schema = Joi.object({
        name: Joi.string()
          .required(),
        userName: Joi.string()
        .min(6).required(),
        email: Joi.string()
          .min(6)
          .required()
          .email(),
        password: Joi.string()
          .min(6)
          .required()
      });
  
  return schema.validate(data, schema);
};
const loginValidation = data => {
  const schema = Joi.object({
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required()
  });
  return Schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
