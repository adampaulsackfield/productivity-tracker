// IMPORTS
import server from './index';

// HELPERS
import logger from './helpers/Logger';

// PORT
if (!process.env.PORT) process.exit(1);
const PORT: number = parseInt(process.env.PORT as string, 10);

// START SERVER
server.listen(PORT, () => {
  logger(`Server is running on PORT:${PORT}`, 'INFO');
});
