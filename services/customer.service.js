const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize')

class CustomerService {
  constructor() {}

  async create(data) {

    // const newUser = await models.User.create(data.user)
    const newCustomer = await models.Customer.create(data, {
      include: ['user']
    })
    return newCustomer;
  }

  async find() {

    const Customers = await models.Customer.findAll({
      include: ['user']
    })

    return  Customers
  }

  async findOne(id) {

    const customer = await models.Customer.findByPk(id)
    if(!customer){
      throw boom.notFound('customer not found')
    }

    return customer
  }

  async update(id, changes) {

    const customer = await this.findOne(id)
    const resp = await customer.update(changes)

    return resp
  }

  async delete(id) {

    const customer = await this.findOne(id)
    await customer.destroy()

    return {resp:true}
  }
}

module.exports = CustomerService;
