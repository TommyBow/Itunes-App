const express = require('express');
const http = require('http');
const helmet = require('helmet'); // Imported Helmet for security
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Enable JSON parsing for request bodies
app.use(helmet()); // Enabled Helmet middleware for security headers

// Handle GET request to '/api/search'
app.get('/api/search', (req, res) => {
  try {
    const { query } = req.query;
    const options = {
      host: 'itunes.apple.com',
      path: `/search?term=${query}&media=all&limit=10`,
      method: 'GET',
    };

    // Send HTTP request to iTunes API
    const request = http.request(options, (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        res.json(JSON.parse(data)); // Send the response from iTunes API to the client
      });
    });

    request.end();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' }); // Handle any errors and send an appropriate response
  }
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
