const { v4 } = require('uuid')
const AWS = require('aws-sdk')

const dynamodb = new AWS.DynamoDB.DocumentClient();

const addUser = async (event) => {
    const { nick,password, correo,image,inscritos,creados } = JSON.parse(event.body)
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
        TableName: 'Users',
        Item: user
    }).promise()

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
          },
        body: JSON.stringify(user)
    }

}

const getUsers = async (event) => {

    const result = await dynamodb.scan({
        TableName: 'Users',
    }).promise()

    const users = result.Items;

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
          },
        body: JSON.stringify(users)
    }
}

const getUserByID = async (event) => {

    const { id } = event.pathParameters;
    const result = await dynamodb.get({
        TableName: 'Users',
        Key: {"id": id} ,
    }).promise()

    const user = result.Item;

    return {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
          },
        body: user
    }
}

module.exports = {
    addUser,
    getUsers,
    getUserByID
};