import express from 'express';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 5000;
import planModelRoutes from './routes/plan.js';
import insuranceRoutes from './routes/insurance.js';
import airportRoutes from './routes/airport.js';
import invoiceRoutes from './routes/invoice.js';
import flightRoutes from './routes/flight.js';
import passengerRoutes from './routes/passenger.js';
import statsRoutes from './routes/stats.js';
import testRoutes from './routes/test.js'
import loginRoutes from './routes/login.js';
// app.use(function (req, res, next) {

//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   res.setHeader('Access-Control-Allow-Credentials', true);

//   next();
// });
app.use(express.json()); 
app.use(cors())
app.use(
    express.urlencoded({
    extended: true,
  })
);
const path='/api/v1'
app.use(path,planModelRoutes);
app.use(path,insuranceRoutes);
app.use(path,airportRoutes);
app.use(path,invoiceRoutes);
app.use(path,flightRoutes);
app.use(path,passengerRoutes);
app.use(path,statsRoutes);
app.use(path,testRoutes);
app.use(path,loginRoutes);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});

app.listen(port, "0.0.0.0",() => {
  console.log(`app listening at port:${port}`)
});
