/**
 * Defines the router for table resources.
 * @type {Router}
 */
const router = require("express").Router(); // Importing the Express router
const methodNotAllowed = require("../errors/methodNotAllowed"); // Importing methodNotAllowed error handler
const controller = require("./tables.controller"); // Importing the controller for table resources

// Defining routes for the table resources
router
  .route("/")
  .get(controller.list) // GET request handler to list tables
  .post(controller.create) // POST request handler to create a new table
  .all(methodNotAllowed); // Catch-all handler for unsupported HTTP methods

router
  .route("/:table_id/seat")
  .put(controller.update) // PUT request handler to update a table's seat
  .get(controller.read) // GET request handler to read table details
  .delete(controller.destroy) // DELETE request handler to delete a table
  .all(methodNotAllowed); // Catch-all handler for unsupported HTTP methods

module.exports = router; // Exporting the router
