const path = require('path');
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const db = require('./config/db');

const SortMiddleware = require('./app/middlewares/sortMiddleware');

// Connect to DB
db.connect();

const app = express();
app.use(express.json());
const port = 4000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

app.use(methodOverride('_method'));

//
app.use(SortMiddleware);
//HTTP Logger
//app.use(morgan('combined'))

//Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: require('./helpers/handlebars'),
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Route init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});