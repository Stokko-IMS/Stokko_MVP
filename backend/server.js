import app from "./expressApp.js";
import db from "./db/client.js";

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await db.connect();
    console.log("✅ Database connected.");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err);
    process.exit(1);
  }
}

startServer();
