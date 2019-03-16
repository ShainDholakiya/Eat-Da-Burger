const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const router = require('./routes/handlers');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// Configure Express Handlebars
app.engine('handlebars', exphbs({ 
    defaultLayout: 'main',
    // defaultLayout: './views/layouts/main',
    layoutsDir: './views/layouts/',
    partialsDir: './views/partials/'
}));
app.set('view engine', 'handlebars');

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server is starting at PORT ${PORT}`);
});