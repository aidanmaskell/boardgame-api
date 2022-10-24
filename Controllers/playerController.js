const createJsonResponse = require('../Services/jsonResponseService')
const getCollection = require('../Services/dbService')
const rollDice = require('../Services/diceService')
const playerService = require('../Services/playerService')
const refereeService = require('../Services/refereeService')
const validationService = require('../Services/validationService')

const gameScreenController = async (req, res) => {

    const collection = await getCollection()
    const players = await playerService.getAllPlayers(collection)

    res.json(createJsonResponse(players))
}

const addPlayerController = async (req, res) => {

    const playerName = req.body.name
    if(validationService.validateName(playerName)) {
        const collection = await getCollection()
        const existingPlayers = await playerService.getAllPlayers(collection)
        const order = existingPlayers.length + 1

        const playerToAdd = playerService.playerToAdd(playerName, order)
        await playerService.addPlayer(collection, playerToAdd)
        
        res.json(createJsonResponse(playerToAdd))
    } else {
        res.json(createJsonResponse('', false, 'Please provide a valid name', 400))
    }
}

const playerTurnController = async (req, res) => {

    const collection = await getCollection()
    const player = playerService.getCurrentPlayerId(req)
    const diceRoll = rollDice()
    await playerService.movePlayerSpace(collection, player, diceRoll)
    let updatedPlayer = await playerService.getPlayerById(collection, player)
    await refereeService.updatePlayerOrder(collection, updatedPlayer)
    if(updatedPlayer[0].space > 29) {
        await playerService.updateWinner(collection, player)
        updatedPlayer = await playerService.getPlayerById(collection, player)
    }

    await res.json(createJsonResponse(updatedPlayer))
}

module.exports.gameScreenController = gameScreenController
module.exports.addPlayerController = addPlayerController
module.exports.playerTurnController = playerTurnController