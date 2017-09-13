const mongoose = require('mongoose');

require('dotenv').config({
    path: 'variables.env'
});

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.error(`MONGOOSE ERROR: ${err.message})`)
})

require('./models/Recipe');

const app = require('./app');

app.set('port', process.env.PORT || 3001);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running on port ${server.address().port}`);
});