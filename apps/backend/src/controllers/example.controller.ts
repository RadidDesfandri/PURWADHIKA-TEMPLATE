import { Request, Response } from 'express';
import ExampleService from '../services/example.service';

const ExampleController = {
  getExample: async (req: Request, res: Response) => {
    const result = await ExampleService.getExample();

    res.status(200).json({
      message: 'Success',
      data: result,
    });
  },
};

export default ExampleController;
