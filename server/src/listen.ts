// IMPORTS
import server from './index';

// PORT
if (!process.env.PORT) process.exit(1);
const PORT: number = parseInt(process.env.PORT as string, 10);

// START SERVER
server.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
