const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, "data");

if(!fs.existsSync(dataFolder)){ 
    fs.mkdirSync(dataFolder);
    console.log("data folder created");
    
}

const file = path.join(dataFolder, 'example.txt');
//sync way of creating the file
fs.writeFileSync(file, 'Hello from node js')
console.log('file created sucessfully');

const readContentFromFile = fs.readFileSync(file, "utf8");
console.log("File content:", readContentFromFile);

fs.appendFileSync(file, '\nThis is a new line added to that file');
console.log("new file content added");

//async way of creating the file

const asyncFilePath = path.join(dataFolder, 'async-example.txt');
fs.writeFile(asyncFilePath, "Hello, Async node js", (err)=> {
    console.log("async file is created sucessfully");
    
})