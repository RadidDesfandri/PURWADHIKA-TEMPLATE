import { Router } from 'express';
import ExampleController from '../controllers/example.controller';
import ExampleMiddleware from '../middlewares/example.middleware';
import { validate } from '../middlewares/validator.middleware';
import ExampleValidator from '../validators/example.validator';

const ExampleRouter = Router();

ExampleRouter.get(
  '/',
  ExampleMiddleware.exampleMiddleware,
  validate(ExampleValidator.example),
  ExampleController.getExample
);

export default ExampleRouter;
