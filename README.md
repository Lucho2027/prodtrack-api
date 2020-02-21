# ProdTrack-API

ProdTrack-API has been created as part of my first Full-Stack Capstone Project for Thinkful (https://thinkful.com/). It is built as RESTful API that allows CRUD transactions to the database for the ProdTrack app.

## Prerequisites

Before you continue, ensure you have met the following requirements:

Clone repository

Install the node dependencies npm install

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

## Technical

- The app was built using PostgreSQL, Knex, JS and Express framework.

## Summary

The API will provide and expect information as layed out bellow.

Each object represent a Data entry summary of an 8 hour shift with a goal(units / integer), produced(units / integer), downtime(minutes / integer) and a reason(string). Each object identified with an id, date, department and shift.

```{
id: 1,
date: "2020-02-08T17:31:59.249Z",
department: "3620",
shift: 1,
goal_1: 263,
produced_1: 160,
downtime_1: 20,
reason_1: "Packer Down: Glue System",
goal_2: 263,
produced_2: 170,
downtime_2: 15,
reason_2: "DC Driver",
goal_3: 263,
produced_3: 200,
downtime_3: 10,
reason_3: "Robot Stacker",
goal_4: 263,
produced_4: 235,
downtime_4: 8,
reason_4: "Robot Covers",
goal_5: 263,
produced_5: 240,
downtime_5: 5,
reason_5: "Waiting Subassembly: Neutrals",
goal_6: 263,
produced_6: 180,
downtime_6: 15,
reason_6: "Conveyor Belt",
goal_7: 263,
produced_7: 255,
downtime_7: 0,
reason_7: "none",
goal_8: 263,
produced_8: 200,
downtime_8: 10,
reason_8: "Packer Down: Label Dispenser"
}
```
