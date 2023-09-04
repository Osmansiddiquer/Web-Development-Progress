
// Hieracrchy:
// MongoDB: database -> collection -> document -> field
// SQL: database -> table -> row ->


use {dbName} // is used to switch to a database
// If the databse doesn't exist, it is created

// showing all databases
show dbs

// showing collections
show collections

// The db variable refers to the current database

// Inserting data in mongo db

// insertOne is use to add a single row/document
db.items.insertOne({anda: "Samsung a12", price: 22000, rating: 4.5, qty: 2499, sold: 45889})


// insert array of objects
db.items.insertMany([
    {name: "Samsung a12", price: 22000, rating: 4.5, qty: 2499, sold: 14755},
    {name: "Samsung a22", price: 32000, rating: 4.1, qty: 478, sold: 6003},
    {name: "Redmi Note 10", price: 48000, rating: 4.2, qty: 875, sold: 8747},
    {name: "ASUS ROG PHONE", price: 159000, rating: 4.8, qty: 12, sold: 104}
])

// where 'items' is the name of the collection of the documents/rows
