# Google-Books---Mern
* I wasn't able to fully complete the activity below, however I have left comments in the code to continue from where I have left off. 

### Overview

In this activity, I created a new React-based Google Books Search app. This assignment required me to create React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches. I also use Node, Express and MongoDB so that users can save books to review or purchase later.

### Instructions

* This application has 2 pages, check out the following mockup images for each page:

  * [Search](Search.png) - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.

  * [Saved](Saved.png) - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.



1. Connected to a MongoDB database named `googlebooks` using the mongoose npm package.

2. Using mongoose, I created a Book schema.



* The layout should includes at least two React Components for each page `Search` and `Saved`

### Bonus Live Updates to Saved Books

* Use React routing and [socket.io](http://socket.io) to create a notification or a component that triggers whenever a user saves an book. Your message should include the title of the saved book.

  * Say you have multiple browsers open, each one visiting your site. If you save an book in one browser, then all of your browsers should notify you that a new book was saved.

  * [Socket.io NPM package](https://www.npmjs.com/package/socket.io)


### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Hosting on Heroku and adding a README.md are required for this homework. In addition, add this homework to your portfolio, more information can be found below.
