const updatePlayerOrder = async (collection, player) => {
    await collection.updateOne({role: "referee"}, {$set: {lastPlayerOrder: player[0].order}})
}

const addOrders = async (players, orders, collection) => {
    players.forEach(player => {
        orders.push(player.order)
    })
    return await collection.updateOne({role: "referee"}, {$set: {orders: orders}})
}

const getReferee = async (collection) => {
    return await collection.find({role: "referee"}).toArray()
}

const removeOrders = async (collection) => {
    return await collection.updateOne({role: "referee"}, {$set: {orders: []}})
}

const resetLastPlayOrder = async (collection) => {
    return await collection.updateOne({role: "referee"}, {$set: {lastPlayerOrder: 0}})
}

module.exports.updatePlayerOrder = updatePlayerOrder
module.exports.addOrders = addOrders
module.exports.getReferee = getReferee
module.exports.removeOrders = removeOrders
module.exports.resetLastPlayOrder = resetLastPlayOrder