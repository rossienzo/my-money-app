const BillingCycle = require('./billingCycle');
const errorHandler = require('../common/errorHandler');

// define os métodos (CRUD) que será utilizado pelo restful
BillingCycle.methods(['get', 'post', 'put', 'delete']);

// o new retorna as alterações do update no banco e o runValidators valida as atualizações
BillingCycle.updateOptions({new: true, runValidators: true});

// caminho para o tratamento de erro, caso seja post ou put
BillingCycle.after('post', errorHandler).after('put', errorHandler);

// Correção para o problema com as rotas do tipo GET
BillingCycle.route('get', (req, res, next) => {

    BillingCycle.find({}, (error, docs) => {

        if(!error) {
            res.json(docs);
        } else {
            res.status(500).json({errors: [error]});
        }

    })

})

// Retorna o número de dados da tabela
BillingCycle.route('count', (req, res, next) => {

    BillingCycle.count((error, docs) => {
        if(!error) {
            res.json({ docs });
        } else {
            res.status(500).json({ errors: [error]});
        }
    });
});

// Retorna o total dos créditos e débitos
BillingCycle.route('summary', (req, res, next) => {
    
    // agreggate: realiza operações em processos de dados gravados e retorna os resultados processados
    BillingCycle.aggregate([{ 
        /**
         * $project:  Passa os documentos com os campos solicitados para a próxima 
         * etapa do pipeline. Os campos especificados podem ser campos existentes dos 
         * documentos de entrada ou campos recém-calculados.
         */
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}} 
    }, { 
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, { 
        $project: {_id: 0, credit: 1, debt: 1}
    }], (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]});
        } else {
            res.json(result[0] || {credit: 0, debt: 0});
        }
    });
});

module.exports = BillingCycle;