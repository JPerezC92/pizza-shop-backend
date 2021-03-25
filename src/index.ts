import app from './app';
import db from './core/shared/infrastructure/db';

app.listen(app.get('port'), () =>
  console.log(`Server running on port ${app.get('port')} 🔥`)
);

new db().test();
