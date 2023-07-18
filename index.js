import app from "./server/app.js";
import { sequelize } from "./server/database/index.js";
import "dotenv";
async function main() {
  try {
    const PORT = process.env.PORT;
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server initialized on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}
main();
