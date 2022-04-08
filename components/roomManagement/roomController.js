const room = require('../../models/room')
const roomService = require('./roomService')

exports.changeInfo = async (req, res) => {
    try {
        const id = req.params.id
        const update_room = req.body

        if (await roomService.isExist(update_room.email)) {
            const room = await roomService.updateRoom(id, update_room)
            res.json(room)
        }
        res.json({
            msg: 'This room is not existed!',
        })
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.getList = async (req, res) => {
    try {
        const { query } = req
        const rooms = await roomService.getList(query)
        res.json(rooms)
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.getDetail = async (req, res) => {
    try {
        const id = req.params.id
        const room = await roomService.getDetail(id)
        res.json(room)
    } catch (e) {
        console.log(e)
        throw e
    }
}

exports.deleteRoom = async (req, res) => {
    try {
        const id = req.params.id
        if (roomService.isExist(id)) {
            const room = await roomService.deleteRoom(id)
            if (room) {
                res.json({msg: 'room has been deleted'})
            }
            res.json('Delete failed')
        }
        res.json({msg: 'There is no room matching this id'})
    } catch (e) {
        console.log(e);
        throw e
    }
}
