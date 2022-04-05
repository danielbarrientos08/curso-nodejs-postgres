const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string().min(3).max(30);
const phone = Joi.string().max(9);
const email = Joi.string().email();
const password = Joi.string().max(50);
const role = Joi.string().max(20);
const userId = Joi.number().integer();


const getCustomerSchema = Joi.object({
  id: id.required(),
});

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: Joi.object({
    email: email.required(),
    password: password.required(),
    role: role.required(),
  })
});

const updateCustomerSchema = Joi.object({
  name,
  lastName,
  phone,
  userId
});



module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema }
