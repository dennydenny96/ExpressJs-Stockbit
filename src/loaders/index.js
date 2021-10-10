import 'dotenv/config';
import expressLoader from './express';

const init = async ({ expressApp }) => {
  await expressLoader({ app: expressApp });
  console.log('Express Initialized');
};

export default { init };
