const express = require("express");
const promptController = require("../controller/prompt-controller");
const routes = express.Router();

routes.post('/api/prompt', promptController.sendText);
routes.get('/api/prompt', (req, res) => {
	return res.status(200).json({
		success: true,
		data: 'route working correctly'
	});
});
routes.get('/', (req, res) => {
	return res.status(200).json({
		success: true,
		data: 'route working correctly'
	});
});

module.exports = routes;