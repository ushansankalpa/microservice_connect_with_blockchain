import expressApp from "./expressApp";
import { logger } from "./utils";

const PORT = process.env.APP_PORT || 9001;

export const StartServer = async () => {
  expressApp.listen(PORT, () => {
    logger.info(`App is listening to ${PORT}`);
  });

  process.on("uncaughtException", async (err) => {
    logger.error(err);
    process.exit(1);
  });
};

StartServer().then(() => {
  logger.info("server is up");
});
