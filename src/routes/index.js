const planRouter = require('./plan');
const listRouter = require('./list');
const storesRouter = require('./stores');
const siteRouter = require('./site');
const authRouter = require('./auth');

function route(app) {
    app.use('/list', listRouter);
    app.use('/auth', authRouter);
    app.use('/stores', storesRouter);
    app.use('/plan', planRouter);
    
    app.use('/', siteRouter);
}

module.exports = route;
