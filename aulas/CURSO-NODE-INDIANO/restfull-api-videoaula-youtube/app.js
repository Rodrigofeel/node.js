const express = require('express');
const app = express();

//middleware
app.use(express.json())

let book =[
    {
        id: '1',
        title : 'book1',
    },
    {
        id: '2',
        title : 'book2',
    },
];  

//intro route
app.get('/', (req,res)=> {
    res.json({
        message : 'welcome to out boolstore api'
    });
});

//get all book
app.get('/get', (req,res)=>{
    res.json(book);
});

//get a single book
app.get('/get/:id', (req,res)=>{
    const books = book.find(item=> item.id === req.params.id)
        if(books){
            res.status(200).json(books);
        } else {
            res.status(400).json({
                message: "book not found! Please try eith a different book id"
            });
        }
});

//add a new book
app.post('/add', (req,res)=> {
    const newBook = {
        id: Math.floor(Math.random() * 1000),
        title : `Book ${Math.floor(Math.random)}`
    };

    book.push(newBook)
    res.status(200).json({
        data: newBook,
        message: "new bool is added successfully",
    });
});

app.put('/update/:id', (req,res)=> {
    const findCurrentBook = book.find(bookitem=>bookitem.id === req.params.id);
    if(findCurrentBook){
        findCurrentBook.title = req.body.title || findCurrentBook.title
        res.status(200).json({
            message : `Book with ID ${req.params.id} updated sucessfully`,
            data : findCurrentBook
        });
    } else {
        res.status(404).json({
            message : 'Book not found'
        })
    }
});

app.delete('/delete/:id', (req,res)=>{
    const findIndexOfCurrentBook = book.findIndex(item=> item.id === req.params.id);
    if(findIndexOfCurrentBook !== -1){
        const deletedBook = book.splice(findIndexOfCurrentBook,1);
        res.status(200).json({
            message : 'Book deleted sucessfully',
            data : deletedBook[0]
        });
    } else {
        res.status(404).json({
            message : 'Book not found'
        });
    }
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server is now running on port ${PORT}`);
    
});