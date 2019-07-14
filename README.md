# Slate backend test assignment (GraphQL)

This repository contains boilerplate for the backend test assignment.
The server uses `Express` and `apollo-server-express` to expose a GraphQL interface. `MongoDB` is used as a database with `mongoose` as ODM.

## Goal

Currently, if you run `npm start`, you will see an error since there are no definitions for Apollo Server. Your task is to create these definitions according to the requirements in [Test assignment](#test-assignment).

When you are done with the test, please send a link to your repo to your recruiter.  Thank you for your time and interest in Slate!

## Test assignment

Using the boilerplate in this repo, expose a GraphQL interface with the following features:

- [x] Raise (create) an incident and assign it to a user with an `Engineer` role
- [x] Assign the incident to a user
- [x] Acknowledge the incident
- [x] Resolve the incident
- [x] Read details about a certain incident
- [x] Delete an incident
- [] Index all incidents in the system (not sure if I get this since I am not allowed to touch the mongoose models for indexing)
  - [] This includes filtering by fields, sorting by the date of creation and update and pagination (I have only done sorting/filtering by assignee and dates, did not accomplish pagination)

`Incident` and `User` models are defined for your convenience. There is no need to wire up the user management system.

## Evaluation

You should spend no more than **4 hours** on this test assignment.

Before you submit the link to your fork with a complete assignment, please make sure your repo contains:

- [x] The code for exposing the GraphQL interface
- [x] A Dockerfile with the code necessary to run your app as a docker container (currently empty)
- [x] Edited `docker-compose.yaml` that includes the reference to your app's docker image along with `mongo`

You are allowed to:

- Add/delete any npm packages as you see fit
- Structure the code in any way you want
- Add any code formatters and linters
- Add configuration variables if needed

You are **not** allowed to:
- Change mongoose models

We will judge your work based on following criteria:
- Code quality, structure and readability
- Amount of boilerplate code
- Usage of new language and framework features to reduce the amount of code written
- Presence of code tests (not required, but is still a big bonus)
- Edge cases coverage (e.g. no user with an Engineer role in the DB) (I do not quite understand the no user with an Engineer role in the DB, I have assumed that you cannot re-assign an user with the Engineer role to incidents)

## Start the development

Make sure you have Node.js v8+ installed.

For your convenience this repository also includes a `docker-compose.yaml` file, which has a mongodb server wired up to the app. `docker-compose up -d` runs in `prestart` hook before `npm start`. If you want to use your own DB setup instead, just delete `prestart` webhook from `package.json`.

Run `npm start` in the root folder of the project to start the development.
