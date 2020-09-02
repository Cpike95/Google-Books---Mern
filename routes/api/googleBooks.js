// // Export an object containing methods we'll use for accessing the GitHub Jobs API
const router = require("express").Router();
const searchController = require("../../controllers/searchController");

// // Matches with "/api/search"
//Route for the search page. 
router.use("/search")
    .get(searchController)


module.exports = router;
