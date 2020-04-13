import express from 'express';
import router from './routes';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'PUT, POST, GET, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.use(express.static('dist'));
app.use('/api', router);

app.use((req, res, next) => {
  const err = res.status(404).json({
    message: 'Sorry Page Not Found!',
  });
  next(err);
});

app.use((err, req, res) => res.status(err.status || 500).json({
  error: {
    message: err.message,
    error: {},
  },
  status: false,
}));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
