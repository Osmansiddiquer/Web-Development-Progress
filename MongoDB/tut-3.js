// Deleting documents from the database
db.items.deleteMany() // pass {} to empty the entire collection

// delete the first match
db.itemms.deleteOne()

// You can use the same queries for delete as in find command


// to delete an entire collection:
db.collection-name.drop()