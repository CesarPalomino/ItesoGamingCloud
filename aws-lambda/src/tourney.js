const { v4 } = require('uuid')
const AWS = require('aws-sdk')

const dynamodb = new AWS.DynamoDB.DocumentClient();

const createTourney = async (event) => {
    try {
        const id = v4()
        const body = JSON.parse(event.body)
        let tourney = {
            id,
            juego: body.juego,
            nombre: body.nombre,
            fechai: body.fechai,
            fechaf: body.fechaf,
            hora: body.hora,
            limit: body.limit,
            cost: body.cost,
            place: body.place,
            plat: body.plat,
            image: body.image,
            cantjug: body.cantjug,
            desc: body.desc,
            tid: body.tid,
            admin: body.admin,
            status: body.status,
            logo: body.logo
        }

        console.log(tourney)

        await dynamodb.put({
            TableName: 'Tourney',
            Item: tourney
        }).promise()

        return {
            statusCode: 200,
            body: JSON.stringify(tourney)
        }

    } catch (error) {
        console.error(error)
    }
}

const editTourney = (event) => {

}

const getTourneyByID = async(event) => {
    const { id } = event.pathParameters;
    const result = await dynamodb.get({
        TableName: 'Tourney',
        Key: {"id": id} ,
    }).promise()

    const tourney = result.Item;

    return {
        status: 200,
        body: tourney
    }
}

const getTourney = async(event) => {
    const result = await dynamodb.scan({
        TableName: 'Tourney',
    }).promise()

    const tourney = result.Items;

    return {
        statusCode: 200,
        body: JSON.stringify(tourney)
    }
}

module.exports = {
    createTourney,
    editTourney,
    getTourneyByID,
    getTourney
}