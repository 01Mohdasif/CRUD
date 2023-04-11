// const express = require("express");
// require("./db/conn.js");
// const cors = require("cors")

// // require("./routers/donation.js")

// const User= require("./models/users.js");
// const router = require("./routers/user.js");
// const app = express();
// const port= process.env.PORT|| 5000;

// app.use(function(req,res,next){
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
//     next();
// })
// app.use(express.json());
// app.use(router);

// app.listen(port, ()=>{
//     console.log(`connection is live at port no.${port}`)
// })

// app.use(express.json());
// app.use(router);

const express = require("express");
require("./db/conn.js");
const cors = require("cors");

const app = express(); // Declare app here
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
  next();
});

const userRouter = require("./routers/user.js");
const donateRouter = require("./models/donations.js");
// const router=require("./routers/donation.js");

// app.use(userRouter);
app.use(donateRouter);

app.listen(port, () => {
  console.log(`connection is live at port no.${port}`);
});
