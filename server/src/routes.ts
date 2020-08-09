import express from "express";
import ClassesController from './controller/ClassesController'
import ConnectionsController from "./controller/ConnectionsController";
const routes = express.Router();
const classeController = new ClassesController();
const connectionController = new ConnectionsController

routes.get('/classes',classeController.index);
routes.post('/classes',classeController.create);

routes.get('/connections',connectionController.index);
routes.post('/connections',connectionController.create);

export default routes;