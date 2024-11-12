const express = require('express');
const app = express();
const routes = require('./routes/routes');
const { connect } = require('./database/database');

const PORT = process.env.PORT || 3000;

connect();
//herramintas importadas
app.use(routes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});