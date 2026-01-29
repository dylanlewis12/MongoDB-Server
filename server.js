//Imports
import express from 'express';

//Setups
const app = express();
const PORT = 3000;


//Middleware
app.use(express.json());
app.use((req, _res, next) => {
  console.log(
    `${req.method} -- ${req.url} -- ${new Date().toLocaleTimeString()}`,
  );

  if (req.body) {
    console.table(req.body);
  }

  next();
});

//Routes

//Global middleware
app.use((err, _req, res, _next) => {
  res.status(err.status || 500).json({ error: `❌ Error: ${err.message}` });
});

//Listener
app.listen(PORT, ()=> {
    console.log(`Server running on PORT: ${PORT}`);
});