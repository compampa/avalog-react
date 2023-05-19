import express from 'express';
import session from 'express-session';
import store from 'session-file-store';
import path from 'path';
import { pathMiddleware } from './middlewares';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/indexRouter';

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

app.engine('js', jsxRender);
app.set('view engine', 'js');
app.set('views', path.join(__dirname, 'components'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));
app.use(pathMiddleware)


app.use('/', indexRouter);

app.listen(PORT, () => console.log(`START ON PORT  ${PORT}`));
