import axios from "axios";

// My intnentions her were to use the Google Books API to search for and populate the books. 

export default {
    searchTerms: function(query) {
      return axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=" + {query} + "API KEY"

      ).then(res => {
        const book = res.data;
        const results = book.map(books => {
          return {
            authors: books.volumeInfo.authors,
            description: books.volume.avatar_url,
            image: books.imageLinks.medium,
            link: books.selfLink,
            title: books.title
          };
        });
        resolve(results);
      })
      .catch(err => reject(err));
  }}; 