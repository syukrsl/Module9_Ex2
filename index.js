const express = require('express')
const testRoute = require('./routes/myTestRoute');
const calculatorRoute = require('./routes/calculator')
const app = express()
const PORT = 3000
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
    );
    
// ADDING MIDDLEWARE
app.use(`/`, express.static('public'))

// SET UP TEST ROUTES / ENDPOINTS
app.use(`/mytest`, testRoute);

// SET UP CALCULATOR ROUTES / ENDPOINTS
app.use(`calculator`, calculatorRoute);

// STARTS THE SERVER. CTRL + C TO KILL SERVER
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

// SET UP SWAGGER 




// //  DEFINING ENDPOINTS
// app.get('/', (req, res) => {
//     console.log(req);
//     res.send('Hello World!')
// })

// // STARTS THE SERVER, CTRL + C to kill server
// app.listen(PORT, () => {
//     console.log('Example app listening at http://localhost:${PORT}')
// })