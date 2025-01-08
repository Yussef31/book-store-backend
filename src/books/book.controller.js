
const book = require("./book.model");

const postABook = async(req , res) => {
    try{
        const newBook = await book({...req.body});
        await newBook.save();
        res.status(200).send({message:"book posted successfully", book: newBook})
    } catch(error){
        console.error("Error creating book", error);
        res.status(500).send({message:"Failed to create a book"})

    }
}
 const getAllBooks = async(req, res) =>{
       try {
        const books = await book.find().sort({createdAd : -1})   ;    
        res.status(200).send(books)


       }catch(error){
        console.error("Error fetching books", error);
        res.status(500).send({message:"Failed to fetch books"})

    }
    

 }
 const getSingleBook = async(req ,res ) => {
    try {
        const {id} = req.params ; 
        const Book = await book.findById(id);
        if(!Book){
            res.status(404).send({message:"book not fond"})
        }
        res.status(200).send(Book)
       }catch(error){
        console.error("Error fetching book", error);
        res.status(500).send({message:"Failed to fetch book"})

    }

 }
 const  UpdateBook = async (req,res) =>{
    try {
        
        const {id} = req.params ;
        const updatedbook = await book.findByIdAndUpdate(id , req.Body , {new:true});
        if(!updatedbook){
            res.status(404).send({message:"book is not fond"})
        }
        res.status(200).send({
            message : "book updated successfully",
            Book : updatedbook
        })
    } catch (error) {
        console.error("Error update a  book", error);
        res.status(500).send({message:"Failed to update book"})
    }

 }

 const Deletebook = async (req,res) =>{
    try {
        const {id} = req.params ;
        const deletedbook = await book.findByIdAndDelete(id);
        if(!deletedbook){
            res.status(404).send({message:"book is not fond"})
        }
        res.status(200).send({
            message : "book deleted successfully",
            Book : deletedbook
        })
        
    } catch (error) {
        console.error("Error delete a  book", error);
        res.status(500).send({message:"Failed to delete  book"})
    }
 } ;

module.exports = {
    postABook,
    getAllBooks,
    getSingleBook,
    UpdateBook,
    Deletebook

}