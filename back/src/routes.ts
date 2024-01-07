import express from 'express';

import CandidatesController from './controller/CandidatesController';

const routes = express.Router();

const candidatesController = new CandidatesController()

routes.get('/candidates/search', candidatesController.index)
routes.post('/candidates', candidatesController.create)

export default routes;