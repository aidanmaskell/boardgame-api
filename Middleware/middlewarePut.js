const getCollection = require('../Services/dbService')
const createJsonResponse = require('../Services/jsonResponseService')
const playerService = require('../Services/playerService')
const refereeService = require('../Services/refereeService')

const putMiddleware = async (req, res, next) => {

    const collection = await getCollection()
    const players = await playerService.getAllPlayers(collection)

    let orders = []
    await refereeService.addOrders(players, orders, collection)

    const referee = await refereeService.getReferee(collection)
    const highestOrder = Math.max(...referee[0].orders)
    const lastPlayerOrder = referee[0].lastPlayerOrder
    const currentPlayerId = playerService.getCurrentPlayerId(req)
    const currentPlayer = await playerService.getPlayerById(collection, currentPlayerId)

    if(lastPlayerOrder === highestOrder) {
        if(currentPlayer[0].order === 1) {
            next()
        } else {
            res.json(createJsonResponse('', false, 'Not your turn!', 400))
        }
    } else if(currentPlayer[0].order === lastPlayerOrder + 1) {
        next()
    } else {
        res.json(createJsonResponse('', false, 'Not your turn!', 400))
    }

}

module.exports = putMiddleware