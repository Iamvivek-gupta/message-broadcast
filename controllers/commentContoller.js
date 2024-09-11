const Comment = require("../models/comment");
const axios = require("axios");
const fs = require("fs");
const csv = require("csv-parser");

exports.populateComment = async (req, res, next) => {
    try {   
        const jsonResponse = await axios.get("https://jsonplaceholder.typicode.com/comments");  
        console.log(jsonResponse.data);
        await Comment.insertMany(jsonResponse.data);

        // fetch SCV file
        const csvUrl = 'http://cfte.mbwebportal.com/deepak/csvdata.csv';
        const csvPath = './csvdata.csv';
        const writer = fs.createWriteStream(csvPath);
        const response = await axios.get(csvUrl, { responseType: 'stream' });

        response.data.pipe(writer);
        writer.on('finish', () => {
            // read CSV file from local 

            const result = [];

            fs.createReadStream(csvPath)
                .pipe(csv())
                .on('data', (data) => result.push(data))
                .on('end', async () => {
                    await Comment.insertMany(result);
                    res.json(({message: 'Data fetched and inserted successfully'}));
                })
        });
    } catch (error) {    
        res.status(500).json(error);
    }   
}   



exports.searchComment = async (req, res) => {
    const { name, email, body, limit, sort } = req.body;
        const query = {};
        if(name) query.name = new RegExp(name, "i");
        if(email) query.email = new RegExp(email, "i");
        if(body) query.body =  new RegExp(body, "i");
    try {
        
        const comments = await Comment.find(query).limit(limit ? parseInt(limit) : 5).sort(sort ? {[sort]: 1} : {id: 1});
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json(error);
    }
}