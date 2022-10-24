const getCollection = require('../Services/dbService')
const playerService = require('../Services/playerService')
const refereeService = require('../Services/refereeService')

const startNewGameController = async (req, res) => {
    const collection = await getCollection()
    await playerService.removeAllPlayers(collection)
    await refereeService.removeOrders(collection)
    await refereeService.resetLastPlayOrder(collection)
    res.redirect('/players')
}

module.exports.startNewGameController = startNewGameController