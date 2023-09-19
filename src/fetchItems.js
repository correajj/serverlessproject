"use strict";

const AWS = require("aws-sdk");

const fetchItems = async (event) => {
    let items; 

    try {
        const results = await dynamoDB.scan({
            TableName: "ItemTableNew"
        }).promise();


    } catch (error) {

        console.log(error)
         
    }
    return {
        statusCode: 200,
        body: JSON.stringify(items),
      };
};

module.exports = {
    handler:fetchItems,
};

