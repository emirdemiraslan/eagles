const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
// Listen on a specific host via the HOST environment variable
//var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
//var port = process.env.PORT || 8080;
 
const cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(8080, "0.0.0.0", function() {
    console.log('Running CORS Anywhere on');
});