// 1. Importer Express.js
const express = require('express');

// 2. Créer une instance d'Express
const app = express();

// 3. Définir le port sur lequel le serveur va écouter
const PORT = 5000;

// 4. Définir une route de base
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// 5. Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
