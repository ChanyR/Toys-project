const indexRouter = require("./index");
const usersRouter = require("./users");
const toysRouter = require("./toys");

exports.routesInit = (app) => {
    app.use("/", indexRouter);
    app.use("/users", usersRouter);
    app.use("/toys",toysRouter);
}