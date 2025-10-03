console.log('node module wrapper demo');

console.log("__filename", _filname);
console.log("__dirname", _dirname);

Module.exports.great = function (name) {
    console.log(`Hello ${name}`);
    
};
