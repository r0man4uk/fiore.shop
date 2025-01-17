const fs = require("fs");
const error = require("console");

// const { error } = require("console");
// const fs = require("fs");

// fs.readFile("Readme.txt", "utf-8", (error, data) => {
//     if (error) throw error;
//     console.log(data);
// });

fs.writeFile("delete_me.txt", "Some text for texting", (error) => {
    if (error) {
    console.log("Can not create a new file") }
    else { 
        console.log("Create succeful") 
    }
});
