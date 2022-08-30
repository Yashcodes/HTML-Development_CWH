show dbs 
use yashkart
show collections
db.items.find({price: "Rs. 30000"})

// Deleting data form the mongo db
db.items.deleteOne({price: "Rs. 30000"}) // Will delete first entry if matched in case of multi document match


//! Deleting is similar to inserting and searching the data (Through Operators)