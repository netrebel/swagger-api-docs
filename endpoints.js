module.exports = function (app) {
	app.get('/users/:id', (req, res) => {

		// #swagger.tags = ['User']
        // #swagger.description = 'Endpoint to get the user.'
		const filtro = req.query.filtro
		return res.status(404).send(false)
	})
}