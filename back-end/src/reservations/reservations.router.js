/**
 * Defines the router for reservation resources.
 * Responsible for handling routes related to reservations.
 * Uses Express Router for defining routes.
 *
 * @type {Router}
 */

const router = require("express").Router(); // Importing Express Router
const methodNotAllowed = require("../errors/methodNotAllowed"); // Importing methodNotAllowed error handler
const controller = require("./reservations.controller"); // Importing reservation controller for route handling

// Define routes for reservations
router.route("/").get(controller.list).post(controller.create); // GET and POST requests for listing and creating reservations
router
  .route("/:reservation_id")
  .get(controller.read) // GET request to read a specific reservation
  .put(controller.editReservation) // PUT request to edit a specific reservation
  .all(methodNotAllowed); // Handling all other methods for reservation_id route

router
  .route("/:reservation_id/status")
  .put(controller.update) // PUT request to update the status of a reservation
  .all(methodNotAllowed); // Handling all other methods for reservation_id/status route

module.exports = router; // Exporting the router module
