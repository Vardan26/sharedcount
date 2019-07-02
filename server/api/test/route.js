import express from 'express';
const testRouter = express.Router();

import TestController from './testController';
const testController = new TestController();

testRouter.get('/', testController.getTest);

export default testRouter;
