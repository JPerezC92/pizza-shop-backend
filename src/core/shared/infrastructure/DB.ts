import { Pool, PoolConfig } from 'pg';

class Db {
  config: PoolConfig = {
    user: <string>process.env.PGUSER,
    database: <string>process.env.PGDATABASE,
    host: <string>process.env.PGHOST,
    password: <string>process.env.PGPASSWORD,
    port: parseInt(<string>process.env.PGPORT),
  };

  pool = new Pool(this.config);

  test = (): void => {
    this.pool
      .connect()
      .then(() => {
        console.log(`Database connection successfully`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export default Db;
