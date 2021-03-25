import express, {
  Application,
  ErrorRequestHandler,
  json,
  Request,
  Response,
  urlencoded,
} from 'express';
import dotenv from 'dotenv';
import router from './api';
dotenv.config();

// configuration
const app: Application = express();
app.set('port', process.env.PORT);
app.use(urlencoded({ extended: false }));
app.use(json());

// routes
app.use(router);

// 404 error handler
router.use((req: Request, res: Response): void => {
  res.send({
    statusCode: 404,
    path: req.url,
    method: req.method,
    errorMessage: 'path not found',
  });
});

router.use(
  (
    error: ErrorRequestHandler,
    request: Request,
    response: Response
    // next: NextFunction
  ) => {
    if (error) console.log(error);
    response.status(500);
    response.json({ error: true, message: 'internal server error' });
    response.end();
  }
);

export default app;
