const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const databaseconnection = require('./config/databasebconnect');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const routeauth = require('./routes/routeauth');
const productRoute = require("./routes/productroute");
const blogroute = require("./routes/blogroute");
const productCategory = require("./routes/productCategory");
const blogCategory = require("./routes/blogCategory");
const brandroute = require("./routes/brandroute");
const colorRoute = require("./routes/colorRoute");
const contactRoute = require("./routes/contactroute");
const couponRouter = require("./routes/couponRoute");
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const cookiePaser = require('cookie-parser');
const morgan = require("morgan");
databaseconnection();


app.use(morgan("dev"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : false }));
app.use(cookiePaser());

app.use('/api/user', routeauth);
app.use('/api/product', productRoute);
app.use('/api/blog', blogroute);
app.use('/api/productcategory', productCategory);
app.use('/api/blogcategory', blogCategory);
app.use('/api/brand', brandroute);
app.use('/api/coupon', couponRouter);
app.use('/api/color', colorRoute);
app.use('/api/contact-us', contactRoute);


app.use(notFound);
app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log("app listening to port " + PORT)
});