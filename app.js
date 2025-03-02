console.log("Hello, this is a to check if working!");

//read file
import { readFile } from 'fs';
readFile('file.txt', 'utf8', function (err, data) {
 if (err) throw err;
 console.log(data);
});

