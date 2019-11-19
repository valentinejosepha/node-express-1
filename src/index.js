const express = require('express');
const app = express();
const port = 3000;

app.get('/api/movies', (request, response) => {
  response.send('Hellooo there!');
});

app.get('/api/movies/:id', (req, res) => {
  res.json({ result: '1 result found'});
}); 

const name = request.query.name;
    if (name) {
        response.status(404).send(`Impossible de récupérer l'employé ${name}`)
    }
    else {
        response.sendStatus(304);
    }
    
app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});


