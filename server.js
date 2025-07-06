require("dotenv").config();
const app = require("./app");

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.error(`Error starting server: ${error.message}`);
  } else {
    console.log(`Server is running on port ${process.env.PORT}`);
  }
});
