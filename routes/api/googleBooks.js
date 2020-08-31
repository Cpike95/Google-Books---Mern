// // Export an object containing methods we'll use for accessing the GitHub Jobs API
const router = require("express").Router();
const searchController = require("../../controllers/searchController");


// // const booksController = require("../../controllers/booksController");

// // Matches with "/api/search"
router.use("/search")
    .get(searchController)


module.exports = router;
