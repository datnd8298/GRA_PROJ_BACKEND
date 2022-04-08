const Room = require('../../models/room')

exports.isExist = async (filter) => {
    try {
        const room = await room.findOne(filter)
        if (room) return true
        return false
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.getRoom = async (email) => {
    try {
        const room = await Room.findOne(email)
        return room
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.createRoom = async (new_room) => {
    try {
        const room = await Room.create(new_room)
        return newroom
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.updateRoom = async (id, data_room) => {
    try {
        const room = await room.findByIdAndUpdate(id, data_room, {
            new: true,
        })
        return room
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.getList = async (query) => {
    try {
        const { filter = {}, page = 0, size = 10 } = query
        const index = page * size
        const room = await room.find(filter, {}, { skip: index, limit: size })
        return room
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.getDetail = async (id) => {
    try {
        const room = await Room.findById(id)
        return room
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.deleteRoom = async (id) => {
    try {
        await Room.findByIdAndDelete(id)
        const room = this.isExist(id)
        if (room) return false
        return true
    } catch (e) {
        console.log(e)
        throw e
    }
}
