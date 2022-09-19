import connect from './model/connection';
import 'dotenv/config';
import App from './app';

const port = process.env.PORT

connect().then(() => {
  App.listen(port, () => {
   console.log(`Server is running on port ${port}`);
  });
   console.log('Connected to MongoDB');
});