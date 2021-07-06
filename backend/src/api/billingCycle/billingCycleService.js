const BillingCycle = require('./billingCycle');

// define os métodos (CRUD) que será utilizado pelo restful
BillingCycle.methods(['get', 'post', 'put', 'delete']);

// o new retorna as alterações do update no banco e o runValidators valida as atualizações
BillingCycle.updateOptions({new: true, runValidators: true})

module.exports = BillingCycle;