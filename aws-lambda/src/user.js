const { v4 } = require('uuid')
const AWS = require('aws-sdk')

const dynamodb = new AWS.DynamoDB.DocumentClient();

const addUser = async (event) => {
    const { nickname, password, correo, image, inscritos, creados } = JSON.parse(event.body)
    const id = v4()

    const user = {
        id,
        nickname,
        password,
        correo,
        image,
        inscritos,
        creados,
    }

    await dynamodb.put({
        TableName: 'Usuarios',
        Item: user
    }).promise()

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        },
        body: JSON.stringify(user)
    }

}

const getUsers = async (event) => {

    const result = await dynamodb.scan({
        TableName: 'Usuarios',
    }).promise()

    const users = result.Items;

    if (users) {
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
            },
            body: JSON.stringify(users)
        }
    } else {
        return {
            statusCode: 400,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
            },
            body: JSON.stringify(users)
        }
    }
}

const getUserByID = async (event) => {

    const { nikname, password } = event.pathParameters;
    const result = await dynamodb.get({
        TableName: 'Usuarios',
        Key: { "nickname": nikname, "password": password },
    }).promise()

    const user = result.Item;

    if (user)
        return {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: user
        }
    else
        return {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: user
        }
}

module.exports = {
    addUser,
    getUsers,
    getUserByID
};