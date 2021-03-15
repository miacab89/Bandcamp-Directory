const Pool = require("pg").Pool;

const pool = new Pool ({
    user: "postgres",
    password: process.env.ADMIN_PASSWORD,
    host: "localhost",
    database: "band_db",
    port: 5432
});


module.exports = pool; 
