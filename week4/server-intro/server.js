// const http = require('http')
// const { response } = require('express')
// const { request } = require('http')
// const server = http.createServer(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' })
//     response.write('Hello, world')
//     response.end()
// })
// const port = 3000
// server.listen(port, function () {
//     console.log(`Node server created at port ${port}`)
// })

const express = require('express')
const path = require('path')
const app = express()

console.log((__dirname))
console.log(path.join(__dirname, 'dist'))
app.use(express.static(path.join(__dirname, 'dist')))

const port = 3000

const users = {
    tilda: "You've done a wonderful job",
    riva: "You need to improve your form, but good perseverance",
    jeremy: "You're incredible"
}

app.get('/users/:userID',function(request,response){
    response.send(users[request.params.userID])
})

app.get('/', function (request, response) {
    console.log("Someone has come into the server. Brace yourselves.")
    response.send("Ending the cycle, thanks for visiting")
})

app.get('/maps', function (request, response) {
    response.send("Here's some stuff related to maps")
})

app.get('/shoobi', function (request, response) {
    response.send("This here is the shoobi *route*")
})

app.get('/life',function(request,response){
    response.send("42")
})

app.get('/landing/:username', function (request, response) {
    response.send(`Hi there, ${request.params.username}`)
})

app.get('/routeWithOptionalParameters', (request, response) => {
    let params = request.query
    response.send(params)
})//optional

app.get('/details', (request, response) => {
    let params = request.query
    console.log(params.city)
// {
//     zipcode: "6863155",
//     city: "Ankh Morpork",
//     middleName: "Wilfred"
//   }
    response.send(params)
})

app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})