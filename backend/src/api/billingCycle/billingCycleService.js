const BillingCycle = require('./billingCycle');

// define os métodos (CRUD) que será utilizado pelo restful
BillingCycle.methods(['get', 'post', 'put', 'delete']);

// o new retorna as alterações do update no banco e o runValidators valida as atualizações
BillingCycle.updateOptions({new: true, runValidators: true})


// Correção para o problema com as rotas do tipo GET
BillingCycle.route('get', (req, res, next) => {

    BillingCycle.find({}, (error, docs) => {

        if(!error) {
            res.json(docs)
        } else {
            res.status(500).json({errors: [error]})
        }

    })

})

BillingCycle.route('count', (req, res, next) => {

    BillingCycle.count((error, docs) => {
        if(!error) {
            res.json({ docs })
        } else {
            res.status(500).json({ errors: [error]})
        }
    });
});


module.exports = BillingCycle;