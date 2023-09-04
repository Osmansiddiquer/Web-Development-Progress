/* Minimal Operations CRUD
    C- Create
    R- Read
    U- Update
    D- Delete
*/

// Updating documents
// To update a single document, use 
db.collection.updateOne()

// To update multiple documents, use 
db.collection.updateMany()

// To replace a document, use 
db.collection.replaceOne()


// increase the price of every Samsung phone by 10%
db.items.updateMany(
    {name: {$regex: "^Samsung"}},
    {$mul: {price: 1.1}}
)

// List of Update Operators: https://www.mongodb.com/docs/manual/reference/operator/update/

db.items.updateMany(
    {name: {$regex: "Samsung"}},
    {$set: {
        rating: 4.3,
        sold: 13000
    },
    $inc: {
        qty: -354
    }
}
)

