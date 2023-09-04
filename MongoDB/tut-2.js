// Reading/Finding data

// to view all the documents in a collection, use:
db.[collection-name].find()
// You can find documents using the find function:
db.items.find({rating: 4.5})
// You can enter queries into the find function:
db.items.find({price: {$lt: 100000}})
// https://www.mongodb.com/docs/manual/tutorial/query-documents/
// Queries Reference: https://www.mongodb.com/docs/compass/current/query/filter/?utm_source=compass&utm_medium=product
// You can use multiple filters too (the comma acts as an AND operator):
db.items.find({price: {$lt: 100000}, rating: {$gt: 4.2}})
// OR Operator
db.items.find({$or:[{price: {$lt: 100000}}, {rating: {$gt: 4.2}}]})
// NOT operator
db.items.find({price: {$not:{$lt: 100000}}})

// PROJECTION: get only a specific column/property (known as fields) of the selected objects
db.items.find({price: {$not:{$lt: 100000}}}, {rating: 1})

// Use findOne to find the first match