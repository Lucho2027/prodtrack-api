const express = require("express");
const DataService = require("./data-service");
const dataRouter = express.Router();
const jsonParser = express.json();
const path = require("path");
const moment = require("moment");

const serializeData = data => ({
  id: data.id,
  date: data.date,
  department: data.department,
  shift: data.shift,
  goal_1: data.goal_1,
  produced_1: data.produced_1,
  downtime_1: data.downtime_1,
  reason_1: data.reason_1,
  goal_2: data.goal_2,
  produced_2: data.produced_2,
  downtime_2: data.downtime_2,
  reason_2: data.reason_2,
  goal_3: data.goal_3,
  produced_3: data.produced_3,
  downtime_3: data.downtime_3,
  reason_3: data.reason_3,
  goal_4: data.goal_4,
  produced_4: data.produced_4,
  downtime_4: data.downtime_4,
  reason_4: data.reason_4,
  goal_5: data.goal_5,
  produced_5: data.produced_5,
  downtime_5: data.downtime_5,
  reason_5: data.reason_5,
  goal_6: data.goal_6,
  produced_6: data.produced_6,
  downtime_6: data.downtime_6,
  reason_6: data.reason_6,
  goal_7: data.goal_7,
  produced_7: data.produced_7,
  downtime_7: data.downtime_7,
  reason_7: data.reason_7,
  goal_8: data.goal_8,
  produced_8: data.produced_8,
  downtime_8: data.downtime_8,
  reason_8: data.reason_8
});

dataRouter
  .route("/")
  .get((req, res, next) => {
    const knexInstance = req.app.get("db");

    DataService.getAllData(knexInstance)
      .then(d => {
        res.json(d);
      })
      .catch(next);
  })
  .post(jsonParser, (req, res, next) => {
    const {
      date,
      department,
      shift,
      goal_1,
      produced_1,
      downtime_1,
      reason_1,
      goal_2,
      produced_2,
      downtime_2,
      reason_2,
      goal_3,
      produced_3,
      downtime_3,
      reason_3,
      goal_4,
      produced_4,
      downtime_4,
      reason_4,
      goal_5,
      produced_5,
      downtime_5,
      reason_5,
      goal_6,
      produced_6,
      downtime_6,
      reason_6,
      goal_7,
      produced_7,
      downtime_7,
      reason_7,
      goal_8,
      produced_8,
      downtime_8,
      reason_8
    } = req.body;
    const newData = {
      date,
      department,
      shift,
      date,
      department,
      shift,
      goal_1,
      produced_1,
      downtime_1,
      reason_1,
      goal_2,
      produced_2,
      downtime_2,
      reason_2,
      goal_3,
      produced_3,
      downtime_3,
      reason_3,
      goal_4,
      produced_4,
      downtime_4,
      reason_4,
      goal_5,
      produced_5,
      downtime_5,
      reason_5,
      goal_6,
      produced_6,
      downtime_6,
      reason_6,
      goal_7,
      produced_7,
      downtime_7,
      reason_7,
      goal_8,
      produced_8,
      downtime_8,
      reason_8
    };

    for (const [key, value] of Object.entries(newData)) {
      if (
        value == null &&
        (key == "date" || key == "department" || key == "shift")
      ) {
        return res.status(400).json({
          error: { message: `Missing '${key}' in request body` }
        });
      }
    }

    DataService.insertData(req.app.get("db"), newData)
      .then(d => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl, `/${d.id}`))
          .json(d);
      })
      .catch(next);
  });

dataRouter
  .route("/:id")
  .all((req, res, next) => {
    DataService.getById(req.app.get("db"), req.params.id)
      .then(d => {
        if (!d) {
          return res.status(404).json({
            error: { message: `Data doesn't exist` }
          });
        }
        res.data = d; // save the data for the next middleware
        next(); // don't forget to call next so the next middleware happens!
      })
      .catch(next);
  })
  .patch(jsonParser, (req, res, next) => {
    const {
      date,
      department,
      shift,
      goal_1,
      produced_1,
      downtime_1,
      reason_1,
      goal_2,
      produced_2,
      downtime_2,
      reason_2,
      goal_3,
      produced_3,
      downtime_3,
      reason_3,
      goal_4,
      produced_4,
      downtime_4,
      reason_4,
      goal_5,
      produced_5,
      downtime_5,
      reason_5,
      goal_6,
      produced_6,
      downtime_6,
      reason_6,
      goal_7,
      produced_7,
      downtime_7,
      reason_7,
      goal_8,
      produced_8,
      downtime_8,
      reason_8
    } = req.body;
    const dataToUpdate = {
      date,
      department,
      shift,
      goal_1,
      produced_1,
      downtime_1,
      reason_1,
      goal_2,
      produced_2,
      downtime_2,
      reason_2,
      goal_3,
      produced_3,
      downtime_3,
      reason_3,
      goal_4,
      produced_4,
      downtime_4,
      reason_4,
      goal_5,
      produced_5,
      downtime_5,
      reason_5,
      goal_6,
      produced_6,
      downtime_6,
      reason_6,
      goal_7,
      produced_7,
      downtime_7,
      reason_7,
      goal_8,
      produced_8,
      downtime_8,
      reason_8
    };
    const numberOfValues = Object.values(dataToUpdate).filter(Boolean).length;
    if (numberOfValues === 0) {
      return res.status(400).json({
        error: {
          message: `Request body must constain 'date', 'department', 'shift'`
        }
      });
    }
    DataService.updateData(req.app.get("db"), req.params.id, dataToUpdate)
      .then(numRowsAffected => {
        res.status(204).end();
      })
      .catch(next);
  })
  .get((req, res, next) => {
    res.json(serializeData(res.data));
  })
  .delete((req, res, next) => {
    DataService.deleteData(req.app.get("db"), req.params.id)
      .then(() => {
        res.status(204).end();
      })
      .catch(next);
  });

module.exports = dataRouter;
