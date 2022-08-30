// Inserting the data in mongo db

// * Commands in mongo shell : 
// * Mongo stores the data in the form of object in the database.

// ? 1. db : shows which database is currently selected
// ? 2. show dbs : shows all the databases you have created
// ? 3. use <database name> : switches to the database in which you want to work with 
// ? 4. show collections : shows all the collections in the database
// ? 5. db.items.insertOne() : inserts a document in the collection
// ? 6. db.items.insertMany() : inserts multiple documents in the collection [It requires array of objects]
// ? 7. db.items.find() : finds all the documents in the collection
// ? 8. db.items.find({name: "Ashish"}) : finds all the documents in the collection with the name as Ashish and will show that particular document in which it is included 



// Some data related stuff 
// use yashkart 
// db.items.insertOne({name: "Samsung A30", price: "Rs. 30000", rating: 4.5, qunatity: 230, sold: 98})

// db.items.insertMany([{name: "Samsung A30", price: 30000, rating: 4.5, qunatity: 230, sold: 98}, {name: "Moto g85", price: 19000, rating: 4.1, qunatity: 180, sold: 50}, {name: "Realme 10pro", price: 25000, rating: 4.3, qunatity: 250, sold: 200}])

