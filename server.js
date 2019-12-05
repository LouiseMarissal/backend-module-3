// Initial configs
require("dotenv").config();
require("./config/mongo");

//Dependencies
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

// Server configuration
const app = express();
app.use(cors([process.env.FRONT_URL]));

// Allow server to parse body from POST Request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors("*"));

// Session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 60000 }, // in millisec
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 // 1 day
    }),
    saveUninitialized: true,
    resave: true
  })
);

app.locals.site_url = process.env.SITE_URL;

// // LOGIN

function loggedIn(req, res, next) {
  req.session.currentUser = "5de90f2e4197e7f60c2eec42";
  next();
}
app.use(loggedIn);

function checkloginStatus(req, res, next) {
  res.locals.user = req.session.currentUser ? req.session.currentUser : null;
  // access this value @ {{user}} or {{user.pro}} in .hbs
  res.locals.isLoggedIn = Boolean(req.session.currentUser);
  // res.locals.isLoggedIn = true;
  // access this value @ {{isLoggedIn}} in .hbs
  next(); // continue to the requested route
}

app.use(checkloginStatus);

//Routing
const authRouter = require("./routes/auth-routes");
const cocktails = require("./routes/coktails");

app.use("/auth-routes", authRouter);
app.use("/cocktail", cocktails);

//Getting/Usings Router
app.listen(process.env.PORT, () => {
  console.log("Server listening on port http://localhost:" + process.env.PORT);
});
