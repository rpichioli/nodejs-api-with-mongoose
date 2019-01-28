const port = 2000;
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const middleware_cors = require('./middlewares/cors');

const app = express();

// MongoDB (Mongoose) connection
const db = mongoose.connect('mongodb://your_database_connection', { useNewUrlParser: true });
// Event interceptors if you wanto to check status
mongoose.connection.on('connected', () => console.log('MongoDB (Mongoose) - Connected'));
mongoose.connection.on('error', error => console.log('MongoDB (Mongoose) - Error', error));
mongoose.connection.on('disconnected', () => console.log('MongoDB (Mongoose) - Disconnected'));

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware allowing all for testing purposes (methods, cross-origin, ..)
app.use(middleware_cors.allowAll);

// Getting route module
const api_users = require('./routes/users');

// Setting routes
// - Root
app.get('/', (req, res) => res.send('API services root directory, welcome!'));
// - Users
app.use('/auth/', api_auth);

// Not allowed access setup
app.use((req, res) => res.status(403).json({ error: 'Forbidden access! URL not allowed.' }));

app.listen(port, () => console.log(`Server listening to ${port}`));
