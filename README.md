# Unhandled Database Errors in Express.js Route

This example demonstrates a common error in Express.js applications: failing to properly handle errors from database queries.  In this scenario, an asynchronous database call (`db.getUser`) lacks robust error handling, resulting in the application potentially crashing or returning a 500 error without useful debugging information.

The `bug.js` file showcases the problematic code.  The `bugSolution.js` file provides a solution that implements comprehensive error handling to gracefully handle database errors and return appropriate HTTP status codes with informative messages.