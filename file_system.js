const { error } = require("console");
const fs = require("fs");

fs.readFile("Readme.txt", "utf-8", (error, datas) => {
    if (error) throw error;
    console.log(data);
});