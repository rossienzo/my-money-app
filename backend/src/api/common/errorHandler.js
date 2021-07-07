// Tratamento de erros

const _ = require('lodash');

module.exports = (req, res, next) => {
    const bundle = res.locals.bundle;

    // caso localize erros vindo do servidor mongo
    if (bundle.errors) {
        const errors = parseErrors(bundle.errors);
        res.status(500).json({ errors });
    } else {

        // continua a aplicação sem encerra-la
        next();
    }
}

const parseErrors = (nodeRestfulErrors) => {
    const errors = [];
    
    // faz uma iteração e coloca os erros dentro da constante
    _.forIn(nodeRestfulErrors, error => errors.push(error.menssage));
    return errors;
}