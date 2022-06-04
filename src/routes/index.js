const newsRouter = require('./news');
const listRouter = require('./list');
const storesRouter = require('./stores');
const siteRouter = require('./site');
const authRouter = require('./auth');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/list', listRouter);
    app.use('/auth', authRouter);
    app.use('/stores', storesRouter);
    
    app.use('/', siteRouter);
}

module.exports = route;
