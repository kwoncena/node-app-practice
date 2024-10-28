// Import the express library and assign it to a variable
import express from 'express'

// Create an instance of an express application 
const app = express()
const movies = {
	horror: "saw",
	comedy: "white girls"
}

// Set the port the application will be running on
const port = process.env.PORT || 3001

// Set up a response for the root path of the application
app.get('/', (req, res) => {
  res.send("I am Cara")
})
app.get('/country/:name', (req, res) => {
    const countryName = req.params.name; // Access the country name
    res.send(`Country: ${countryName}`);
});
app.get('/departments/:department', (req, res) => {
    const departmentName = req.params.department; // Access the department name
    res.send(`Department: ${departmentName}`);
});

app.get('/country', (req, res) => {
    const countryName = req.query.country; // Access the country name
    res.send(`Country: ${countryName}`);
});
app.get('/movies', (req, res) => {
    const genreName = req.query.genre; // Access the genre name
    res.send(`genre: ${genreName}`);
});


app.get('/products/:product', (req, res) => {
    const productName = req.params.product; // Access the product name
    res.send(`Product: ${productName}`);
});
//once it get to the site, the client is requesting from server

// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}` )
})