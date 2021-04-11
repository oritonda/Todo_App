const TodoModel = require("../models/personModel.js");
//This array will store activities
var activities = [];

//This method adds activities in an array activities
exports.addActivities = (req, res) => {
  const activity = req.body.activity;
  const status = req.body.status;

  TodoModel.create({
    activity: activity,
    status: status,
  }).then(() => {
    res.send(req.body);
  });
};

//This method displays activities stored in array activities
exports.displayActivities = (req, res) => {
  TodoModel.find((error, data) => {
    res.json(data);
    // console.log(data);
  });
};

//This method deletes activities stored in array activities
exports.deleteActivity = (req, res) => {
  TodoModel.findByIdAndRemove({ _id: req.params.index }).then(
    res.send(req.body)
  );
};

//This method updates activities stored in array activities
exports.updateActivity = (req, res) => {
  let id = req.params.id;
  TodoModel.findByIdAndUpdate(
    id,
    { activity: req.body.activity },
    (error, data) => {
      if (error) {
        console.log("Error: ", error);
      } else {
        console.log("Data : ", data);
      }
      res.send(data);
    }
  );
};

//This method updates status stored in array activities
exports.editStatus = (req, res) => {
  let id = req.params.id;
  TodoModel.findByIdAndUpdate(
    id,
    { status: req.body.status },
    (error, data) => {
      if (error) {
        console.log("Error: ", error);
      } else {
        console.log("Data : ", data);
      }
      res.send(data);
    }
  );
};
