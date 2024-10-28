const http = require('http');
const path = require('path');
const bodyParser = require('body-parser')
const express = require('express');
const app = express();
const server = http.createServer(app);
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.set()
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})


server.listen(3200, () => {
    console.log('Server is listening on port 3200');
});
