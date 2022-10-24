const createJsonResponse = require('../Services/jsonResponseService')
const putMiddleware = require('../Middleware/middlewarePut')
const playerController = require('../Controllers/playerController')
const gameController = require('../Controllers/gameController')

const routes = (app) => {

    app.delete('/game', gameController.startNewGameController)
    app.get('/players', playerController.gameScreenController)
    app.post('/players', playerController.addPlayerController)
    app.put('/players/:id', putMiddleware, playerController.playerTurnController)

    //unsupported enpoints
    const unsupportedRoute = (req, res) => {
        res.json(createJsonResponse([], false, 'unsupported route', 300))
    }

    app.get('/', unsupportedRoute)
    app.post('/', unsupportedRoute)
    app.put('/', unsupportedRoute)
    app.delete('/', unsupportedRoute)
    
    app.get('/game', unsupportedRoute)
    app.post('/game', unsupportedRoute)
    app.put('/game', unsupportedRoute)
    
    app.put('/players', unsupportedRoute)
    app.delete('/players', unsupportedRoute)

    app.get('/players/:id', unsupportedRoute)
    app.post('/players/:id', unsupportedRoute)
    app.delete('/players/:id', unsupportedRoute)

}

module.exports = routes