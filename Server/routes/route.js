const express = require("express");
const router = express.Router();
const controller = require(".././controllers/controller.js");

//The path to adding an activity
router.post("/activity", controller.addActivities);

//The path to retrieve activities
router.get("/activities", controller.displayActivities);

//The path to modifying the status
router.put("/editStatus/:id", controller.editStatus);

//The path to deleting an activity
router.delete("/activity/:index", controller.deleteActivity);

//The path to updating an activity
router.put("/activity/:id", controller.updateActivity);

//Exports all paths
module.exports = router;
