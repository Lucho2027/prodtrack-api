# ProdTrack-API

ProdTrack-API has been created as part of my first Full-Stack Capstone Project for Thinkful (https://thinkful.com/). It is built as RESTful API that allows CRUD transactions to the database for the ProdTrack app.

## Prerequisites

Before you continue, ensure you have met the following requirements:

1. Clone this repository to your local machine `git clone PRODTRACK-API-URL NEW-PROJECTS/BRANCH-NAME`
   `cd` into the cloned repository
2. Make a fresh start of the git history for this project with `rm -rf .git && git init`
3. Install the node dependencies `npm install`

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

## Technical

The app was built using PostgreSQL, Knex, JS and Express framework.

The endpoints that currently have services set up for:
The following will return all of the data entries in the database (see summary for an example of one of the objects this request will yield):

`GET -> /api/dataentry`

The following will return the object with identified with `id` (see summary for an example of the object that this request will yield if the object exists):

`GET -> /api/dataentry/:id`

The following will POST an object to the database identified with `id` (see summary for an example of the object that the API will expect as input) the date, department and shift are required to post a new object:

`POST -> /api/dataentry/:id`

The following will PATCH an object to the database identified with `id` (see summary for an example of the object that the API will expect as input) the date will remain as the original record, department and shift are required to patch/update an object:

`PATCH -> /api/dataentry/:id`

The following will DELETE an object off the database identified with `id` :

`DELETE -> /api/dataentry/:id`

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
