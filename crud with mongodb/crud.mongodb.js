use("CrudDb") // creates or selects the database 'CrudDb'
//console.log(db);
db.createCollection("courses"); // creates a collection named 'courses' in the 'CrudDb' database

// first to create function
db.courses.insertOne({    //inserts a single document into the 'courses' collection
  name: "MongoDB Basics",
    description: "An introductory course on MongoDB",
    duration: "4 weeks",
    price : 199.99,
    instructor: "John Doe"
});

db.courses.insertMany([
    {
  name: "MongoDB Basics",
  description: "An introductory course on MongoDB",
  duration: "4 weeks",
  price: 0,
  instructor: "John Doe"
},
{
  name: "Mastering MongoDB",
  description: "Advanced MongoDB techniques and best practices",
  duration: "6 weeks",
  price: 249.99,
  instructor: "Emily Smith"
},
{
  name: "MongoDB for Developers",
  description: "Learn how to integrate MongoDB in full-stack apps",
  duration: "5 weeks",
  price: 0,
  instructor: "Michael Lee"
},
{
  name: "MongoDB Crash Course",
  description: "Quick-start course for getting up to speed with MongoDB",
  duration: "2 weeks",
  price: 99.99,
  instructor: "Sophia Patel"
},
{
  name: "NoSQL with MongoDB",
  description: "Explore NoSQL databases using MongoDB",
  duration: "3 weeks",
  price: 149.00,
  instructor: "David Kim"
},
{
  name: "MongoDB for Beginners",
  description: "Get started with MongoDB from scratch",
  duration: "4 weeks",
  price: 129.99,
  instructor: "Liam Johnson"
},
{
  name: "Full-Stack MongoDB Bootcamp",
  description: "Backend dev with Node.js and MongoDB",
  duration: "8 weeks",
  price: 299.00,
  instructor: "Ava Martinez"
},
{
  name: "MongoDB with Python",
  description: "Learn how to use MongoDB with Python (PyMongo)",
  duration: "5 weeks",
  price: 179.99,
  instructor: "Chris Walker"
},
{
  name: "MongoDB Performance Tuning",
  description: "Optimize and scale your MongoDB databases",
  duration: "6 weeks",
  price: 259.00,
  instructor: "Olivia Brown"
},
{
  name: "Real-Time Apps with MongoDB",
  description: "Build real-time apps using MongoDB and sockets",
  duration: "7 weeks",
  price: 279.99,
  instructor: "Ethan Davis"
}


])


// now, to read FUNCTION
let a =db.courses.find({price:0})
console.log(a.count());

let b= db.courses.findOne({price: 0});
console.log(b);


//NOW TO UPDATE FUNCTION
// to update one
let updateOne = db.courses.updateOne(  // updates a single document in the 'courses' collection
  { price: 0 }, //// Find course with price 0
  { $set: { price: 100 } } // Set the price to 100
);
console.log("🔄 updateOne Result (price: 0 → 100):"); //
console.log(updateOne);

// to update many
let updateMany = db.courses.updateMany(  // // updates multiple documents in the 'courses' collection
  { price: 0 },  // Find courses with price 0
  { $set: { price: 150 } }  // set price to 150 for all matching documents
);
console.log("🔄 updateMany Result (price: 0 → 150):");
console.log(updateMany);


//NOW TO DELETE FUNCTION

//TO DELETE ONE

let delOne = db.courses.deleteOne({ price: 150 }); // deletes a single document from the 'courses' collection where price is 150
console.log("🗑️ deleteOne Result (price: 150):"); // logs the result of the delete operation
console.log(delOne); // logs to


//TO DELETE MANY

let delMany = db.courses.deleteMany({ price: 150 }); //delete many documents from the 'courses' collection where price is 150
console.log("🗑️ deleteMany Result (price: 150):"); // logs the result of many deleted operations
console.log(delMany);
