const express = require('express')
const path = require('path')
const app = express()

console.log((__dirname))
console.log(path.join(__dirname, 'dist'))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))

const port = 3000

const data = {
   
}

app.get('/priceCheck/:name', function(request, response) {
    let name = request.params.name
    let priceObj = {price: null}
    for(let obj of store) {
        if(obj.name === name) {
            priceObj = {price: obj.price}
        }
    }
    response.send(priceObj)
})

app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})