import express from 'express';
const webRouter = express.Router();

import WebController from '../controllers/webController';
const webController = new WebController();

webRouter.get('/', webController.getViewHomepage);
webRouter.get('/faq', webController.getViewFaq);
webRouter.get('/api-docs', webController.getViewApiDocs);
webRouter.get('/pricing', webController.getViewApiPricing);
webRouter.get('/policy', webController.getViewApiPolicy);

export default webRouter;
