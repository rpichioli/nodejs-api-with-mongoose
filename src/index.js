const port = 2000;
const express = require('express');
const app = express();
app.listen(port, () => console.log(`Server listening to ${port}`));
