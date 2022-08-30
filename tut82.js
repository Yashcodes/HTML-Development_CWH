// Searching/ Querying data in mongodb
//* use yashkart // Using the database yashkart

// This query will return all the objects with rating equal to 4.3
db.items.find({rating: 4.3}) // The object inside the find fucntion is called filter object
db.items.find({rating: {$eq: 4.3}}) --> eq is equal to
db.items.find({rating: {$gte: 4.3}}) --> gte is greater than or equal to
db.items.find({rating: {$gt: 4.3}}) --> gt is greater than

// AND Operator --> Applying different filters using , (Comma)
// db.items.find({rating: {$gt: 4.3}, price: {$gt: 30000}})
// db.items.find({rating: {$gt: 4.3, $lt: 4.7}}) --> gt is greater than and lt is less than

// OR Operator
db.items.find({$or: [{rating: {$gt: 4.3}}, {sold: {$gt: 100}}]})

The parameter we are passing to the find function are: 
1. Query : The condition of the data we want from the collections
2. Projection: Specifies that only the passed data key we want from the server


db.items.find({rating: {$gt: 4.3}}, {rating: 1}) // rating 1 means only rating will be returned
db.items.find({rating: {$gt: 4.3}}, {rating: 1, quantity: 1}) // quantity 1 means only quantity will be returned and rating is already there