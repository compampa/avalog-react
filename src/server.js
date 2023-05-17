import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import path from 'path';
import { pathMiddleware } from './middlewares';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/indexRouter';
import servicesRouter from './routes/servicesRouter';
import apiRouter from './routes/apiRouter';

require('dotenv').config();

const PORT = process.env.SERVER_PORT || 3000;
const app = express();
const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 30,
    httpOnly: true,
  },
};

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));
app.use(pathMiddleware)


app.use('/', indexRouter);
app.use('/services', servicesRouter);
app.use('/api', apiRouter);

app.listen(PORT, () => console.log(`START ON PORT  ${PORT}`));
