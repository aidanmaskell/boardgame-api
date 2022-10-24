const ObjectId = require('mongodb').ObjectId

const getAllPlayers = async (collection) => {
    return await collection.find({role: "player"}).toArray()
} 

const getPlayerById = async (collection, player) => {
    return await collection.find(player).toArray()
}

const playerToAdd = (name, order) => {
    return {
            name: name,
            space: 1,
            order: order,
            role: "player",
            winner: false
        }
}

const addPlayer = async (collection, playerToInsert) => {
    return await collection.insertOne(playerToInsert)
}

getCurrentPlayerId = (req) => {
    return {
        _id: ObjectId(req.params.id)
    }
}

const movePlayerSpace = async (collection, player, diceRoll) => {
    return await collection.updateOne(player,{$inc: {space: diceRoll}})
}

const updateWinner = async (collection, player) => {
    return await collection.updateOne(player,{$set: {winner: true}})
}

const removeAllPlayers = async (collection) => {
    return await collection.deleteMany({role: "player"})
}


module.exports.getAllPlayers = getAllPlayers
module.exports.getPlayerById = getPlayerById
module.exports.playerToAdd = playerToAdd
module.exports.addPlayer = addPlayer
module.exports.getCurrentPlayerId = getCurrentPlayerId
module.exports.movePlayerSpace = movePlayerSpace
module.exports.updateWinner = updateWinner
module.exports.removeAllPlayers = removeAllPlayers
