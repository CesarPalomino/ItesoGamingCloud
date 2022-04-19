const { v4 } = require('uuid')
const AWS = require('aws-sdk')

const dynamodb = new AWS.DynamoDB.DocumentClient();

const addUser = async (event) => {
    const { nick,password, correo,image } = JSON.parse(event.body)
    const id = v4()

    const user = {
        id,
        nick,
        password,
        correo,
        image
    }

    await dynamodb.put({
        TableName: 'Users',
        Item: user
    }).promise()

    return {
        statusCode: 200,
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
        body: user
    }
}

module.exports = {
    addUser,
    getUsers,
    getUserByID
};