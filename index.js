const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');


const port = process.env.port || 5000;
require('dotenv').config()

//middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials : true
}));

//routes
const bookRoutes = require('./src/books/book.rout');
const orderRoutes = require("./src/orders/order.route")
const userRoutes = require ('./src/users/user.route')
const adminRoutes = require ('./src/stats/admin.stats.js')

app.use("/api/books" , bookRoutes)
app.use("/api/orders" , orderRoutes)
app.use("/api/auth" , userRoutes)
app.use("/api/admin" , adminRoutes)

/*passwrd xxiQkyFYQQEpvtys  user name echchahlaouiyoussef */
 
async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.use('/', (req, res) => {
        res.send('book server is running')
    });
}
main().then(()=> console.log("mongodb connected")).catch(err => console.log(err));
app.listen(port, () => {
  console.log('Example app listening on port ', {port})
});