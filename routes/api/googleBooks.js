// Export an object containing methods we'll use for accessing the GitHub Jobs API
const router = require("express").Router();
import axios from "axios";

// const booksController = require("../../controllers/booksController");

// Matches with "/api/search"
router.get("/search", query => {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" + {query} + "&key=AIzaSyDs5bl_uhk0NxueT4cv6AGTSW_3c6EeG2M"   
    );
  });

module.exports = router;
