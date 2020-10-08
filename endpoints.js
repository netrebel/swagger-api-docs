module.exports = function (app) {
	app.get('/users/:id', (req, res) => {

		// #swagger.tags = ['User']
		// #swagger.description = 'Endpoint to get the user.'
		// #swagger.parameters['id'] = { description: 'User ID' }

		/* #swagger.parameters['filter'] = {
			   description: 'A filter',
			   type: 'string'
		} */
		const filter = req.query.filter

		/* #swagger.responses[200] = { 
			   schema: { $ref: "#/definitions/User" },
			   description: 'User found.' 
		} */
		return res.status(404).send(false)
	})

	app.post('/users', (req, res) => {
		/* #swagger.tags = ['User']
		   #swagger.description = 'Endpoint to add a user.' */

		/* #swagger.parameters['newUser'] = {
			   in: 'body',
			   description: 'User info',
			   required: true,
			   type: 'object',
			   schema: { $ref: "#/definitions/AddUser" }
		} */

		const newUser = req.body

		if (true) {
			// #swagger.responses[201] = { description: 'User added successfully!' }
			return res.status(201).send(data)
		}
		return res.status(500)    // #swagger.responses[500]
	})
}