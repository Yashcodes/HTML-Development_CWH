show dbs 
use yashkart
show collections

//  Updating data in mongo db

db.items.find()
db.items.updateOne({name: "Moto g85"}, {$set: {price: 200}})
db.items.find()
db.items.updateMany({price: 30000}, {$set: {price: 25000}})

db.products.insertOne({
    _id: 2,
    name: "Pencil",
    price: 3,
    stock: 15,
    reviews: [
        {
            authorName: "Komal",
            rating: 4,
            review: "Best pen ever"
        },
        {
            authorName: "Shrishti",
            rating: 2,
            review: "Good enough"
        }
    ]
}
)

db.items.updateMany({name: "Realme 10pro"},
{$set: {
    performance: {
        ram : "8gb",
        ssd: true
    }
}}

)