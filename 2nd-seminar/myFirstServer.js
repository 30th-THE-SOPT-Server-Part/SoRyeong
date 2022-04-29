// const http = require('http');

// http.createServer((req, res) => {
//     res.write('<h1>soryeongk</h1>');
//     res.end('<p>hey~</p>');
// }).listen(8080, () => {
//     console.log('808이다다다ㅏ');
// });

const http = require('http');

http.createServer((req, res) => {
    res.write('<h1>soryeongk</h1>');
    res.end('<p>hey~</p>');
}).listen(8080, () => {
    console.log('8080번 악악!');
});