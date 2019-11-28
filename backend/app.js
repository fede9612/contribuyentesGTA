server = require("./server")

mongoConnection = require("./src/mongo/mongoConnection")
Home = require("./src/mongo/mongoHome")
mongoConnection.connect( (db) => {
    contribuyenteHome = new Home("contribuyentes", db);
    server.register(contribuyenteHome);    
    server.init();
})

