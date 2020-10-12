import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();


app.use('/api/v1', routes);
app.use('/', async function (req, res) {
  res.send('Sorry no such route available');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
