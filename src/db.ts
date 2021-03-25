import pg from 'pg';

const pool = new pg.Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: parseInt(<string>process.env.PGPORT),
});

pool
  .connect()
  .then(() => {
    console.log(`Database connection successfully`);
  })
  .catch((err) => {
    console.log(err);
  });
