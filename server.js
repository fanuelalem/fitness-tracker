const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/api");
const viewRoutes = require("./routes/view");


 
const PORT = process.env.PORT || 3000

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// routes
app.use('/api', apiRoutes) 
app.use('/', viewRoutes) 

// app.use(require("./routes/api"));
// app.use(require("./routes/view"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});