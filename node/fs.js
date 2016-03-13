var fs = require('fs');

// Synchronous Read -->  var data = fs.readFileSync('./index.html', 'utf8');
// Asynchronous Read --> 
fs.readFile('./index.html', 'utf8', function(err, data) {
console.log(data);
});

// write sample text -- no append
fs.writeFile('./results.txt', 'Test his patience \n', function(err) {
  if(err) throw err;
  console.log('File write complete');
});

//open, write to a file and close it (in parts)

//fs.open('./data/index.html', 'w', function(err, fd) {
//  if(err) throw err;
//  var buf = new Buffer('This is great\n');
//  fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer) {
//   if (err) throw err;
//    console.log(err, written, buffer);
//    fs.close(fd, function() {
//      console.log('Done writing');
//    });
//  });
//});

fs.open('./data/index.html', 'r', function(err, fd) {
    if(err) throw err;
    var buf = new Buffer(3);
    fs.read(fd, buf, 0, buf.length, null, function(err, bytesRead, buffer) {
      console.log('reading..');
      if(err) throw err;
      console.log(err, bytesRead, buffer);
      fs.close(fd, function() {
        console.log('Done Reading');
      });
    });
  });

var path = './data';
fs.readdir(path, function (err, files) {
  if(err) throw err;
  files.forEach(function(file) {
    console.log(path+file);
    fs.stat(path+file, function(err, stats) {
      console.log(stats);
    });
  });
});

//Creating and Deleting a directory

fs.mkdir('./tempdir', 066, function(err) {
  if(err) throw err;
  console.log('Created TempDir');
fs.rmdir('./tempdir', function(err) {
  if(err) throw err;
  console.log('Removed Tempdir');
  });
});

// Reading a file and writing to another file

var file = fs.createReadStream('./data/results.txt', {flags: 'r'} );
var out = fs.createWriteStream('./data/output.txt', {flags: 'w'} );
file.on('data', function(data) {
  console.log('data', data);
  out.write(data);
});

file.on('end', function() {
  console.log('end');
  out.end(function() {
    console.log('Finished writing to file');
//    test.done();
  });
});

//Alternate ways of reading and writing to another file:
var file = fs.createReadStream('./data/input.txt', {flags: 'r'} );
var out = fs.createWriteStream('./data/out.txt', {flags: 'w'} );
file.pipe(out);

// Appending to a file

var file = fs.createWriteStream('./data/out.txt', {flags: 'a'} );
file.write('Testing is enough \n');
file.end(function() {
//  test.done();
});

