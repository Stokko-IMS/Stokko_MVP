// import pg from "pg";
// const db = new pg.Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });
// export default db;

// ==============To test on my local pc ==========
// had to disable SSL and was given this code - comment out later and uncomment the above original

import pg from "pg";

const db = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  // Render cloud databases require SSL even when testing from a local laptop
  ssl: {
    rejectUnauthorized: false,
  },
});

export default db;
