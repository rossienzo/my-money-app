// Habilita o CORS
module.exports = (req, rese, next) => {
    rese.header('Access-Control-Allow-Origin', '*');
    rese.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    rese.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');
    next();
}