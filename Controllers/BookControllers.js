const { count } = require('console')
const express =  require('express')
const fs = require('fs')

let Books = JSON.parse(fs.readFileSync('./Data/Books.json', 'utf-8' ))



exports.chekId = (req , res , next , value) =>{
  console.log('Book ID is ' + value)

  let Book = Books.find(el => el.id === value * 1);
  if(!Book)
  {
    return res.status(404).json({
      status:"fail",
      message:"Book with id " + value +" is not found "
    })
  }
  next()
}


exports.validDatabody = (req , res , next) =>{
  if(!req.body.name || !req.body.author){
    return res.status(400).json({
      status:'fail',
      message:'Not a valid Book Data'
    })
  }
  next();
}

// ROUTE HANDLER FUNCTIONS


exports.createBook= (req , res) =>{
  const newId = Books[Books.length - 1].id + 1;
  const newBook = Object.assign({id:newId} , req.body)
  Books.push(newBook);

fs.writeFile('./Data/Books.json', JSON.stringify(Books), (err) => {
  if (err) {
    return res.status(500).json({
      status: "Fail",
      message: 'Error Writing file'
    });
  }
  res.status(201).json({
    status: "Success",
    data: { book: newBook }
  });
});
}


exports.GetAllBooks = (req , res) =>{
  if(Books.length === 0){
    return res.status(200).json({
      status:'Success',
      count:0,
      message:'No Books found'
    })
  }
  res.status(200).json({
    status: "Success",
    count: Books.length,
    data: {
      Books: Books
    }
  });
}

exports.GetBookById = (req ,res) =>{
    const id = req.params.id * 1;
    let Book = Books.find(el => el.id === id);
    if(!Book){
    return res.status(404).json({
      status:"fail",
      message:"Book with id " + id +" is not found "
    })
  }
    res.status(200).json({
      status:'Success',
      data:{
        book:Book
      }
    })
}

exports.UpdateBook = (req , res) =>{
  let id = req.params.id * 1;
  let BookUpdate = Books.find(el => el.id === id);
if(!BookUpdate) {
  return res.status(404).json({
    status:"fail",
    message:"Book with id " + id +" is not found "
  })
}
  let index = Books.indexOf(BookUpdate); 
  
  Object.assign(BookUpdate , req.body);
  Books[index] = BookUpdate;

  fs.writeFile('./Data/Books.json' , JSON.stringify(Books) , (err) =>{
        if(err)
    {
      return res.status(404).json({
        status:"Fail",
        message:'Error Writing file'
      })
    }
    res.status(200).json({
      status:"Success",
      data:{
        Books:BookUpdate
      }
    })
  })

}

// Delete Movie by id 
exports.DeleteBook =  (req , res) =>{
  const id = req.params.id * 1;
  let Bookdelete = Books.find(el => el.id === id);
  let index = Books.indexOf(Bookdelete); 
  // if(!moviedelete)
  // {
  //   return res.status(404).json({
  //     status:"fail",
  //     message:'Movie with id '+ id + ' is Not Found '
  //   })
  // }
  Books.splice(index , 1);
  fs.writeFile('./Data/Books.json' , JSON.stringify(Books) , (err) =>{
  if(err)
    {
      return res.status(404).json({
        status:"Fail",
        message:'Error Writing file'
      })
    }
    res.status(200).json({
      status:"Success",
      message:'Book Deleted'
    })
  })
}
