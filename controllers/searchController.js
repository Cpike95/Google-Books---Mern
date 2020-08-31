import axios from "axios";

export default {
    searchTerms: function(query) {
      return axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=" + {query} + "&key=AIzaSyDs5bl_uhk0NxueT4cv6AGTSW_3c6EeG2M"
      );
    }
  };