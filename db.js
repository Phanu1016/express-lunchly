/** Database for lunchly */

const pg = require("pg");

const USERNAME = 'YOURUSERNAME'
const PASSWORD = 'PASSWORD'

const db = new pg.Client(`postgresql://${USERNAME}:${PASSWORD}@localhost:5432/lunchly`);

// const db = new pg.Client("postgresql:///lunchly");

db.connect();

module.exports = db;
