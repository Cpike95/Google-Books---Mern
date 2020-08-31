import React, { useState, useEffect } from "react";

import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import {  Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
// import googlebooks from "../../routes/api/googleBooks.js"

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [bookSearch, setBookSearch] = useState({});
  // const [newBook, setNewBook] = useState({})

  // Load all books and store them with setBooks
  // `https://www.googleapis.com/books/v1/volumes?q=search-terms&key=your-API-key`
  useEffect(() => {
    loadBooks()
  //   googlebooks.searchTerms()
  //   .then(response => response.json())
  //   .then(result => {
  // setBookSearch({ books: result.items})
  // })
});
  // }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.searchTerms()
      .then(res => 
        setBookSearch(res.data)
      )
      .catch(err => console.log(err));
  };

  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    setBookSearch({...bookSearch, [name]:value});
  };


  // // Handles updating component state when the user types into the input field
  // function handleSave(event) {
  //   const { name, value } = event.target;
  //   setFormObject({...formObject, [name]: value})
  // };
  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getBooks(bookSearch)
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  };
  // // When the form is submitted, use the API.saveBook method to save the book data
  // // Then reload books from the database
  function handleBookSave(event) {
    event.preventDefault();
    if (bookSearch.title && bookSearch.author) {
      API.saveBook({
        authors: [bookSearch.author],
        description: bookSearch.description,
        image: bookSearch.image,
        link: bookSearch.link,
        title: bookSearch.title
      })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
         
            <Jumbotron>
              <h1>Google Book Search</h1>
              <h3>Search for and Save Books of interest</h3>
            </Jumbotron>


            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
         
              <FormBtn
                // disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          

        
          <Jumbotron>
            <h1>Books </h1>
          </Jumbotron>
          {books.length ? (
            <List>
              {books.map(book => (
                <ListItem key={book._id}>
                  <Link to={"/api/search" }>
                    <strong>
                      {book.title} by {book.author}
                    </strong>
                  </Link>
                  <FormBtn
                // disabled={!(formObject.author && formObject.title)}
                  onClick={handleBookSave}
                  >
                   Save Book
                  </FormBtn>
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}

      </Container>
    );
  }


export default Books;
