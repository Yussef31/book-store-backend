const express = require('express');
const book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, UpdateBook, Deletebook } = require('./book.controller');
const verifyAdmintoken = require('../middleware/verifyAdmintoken');
const router = express.Router();

// post = when submit something frontend to DB

// POST A BOOK
router.post("/create-book", postABook)

// GET AL BOOKS
router.get("/", getAllBooks )
// get a single bookendpoint
router.get("/:id",getSingleBook)

// update a book 
router.put("/edit/:id", UpdateBook )

// delete book 
router.delete("/:id" , Deletebook)



module.exports = router ;