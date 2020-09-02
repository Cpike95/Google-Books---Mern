import axios from "axios";

// My intnentions her were to use the Google Books API to search for and populate the books. 

export default {
    searchTerms: function(query) {
      return axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=" + {query} + "API KEY"

      );
    }
  };