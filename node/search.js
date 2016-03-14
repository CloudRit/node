var fs = require('fs');

function findFile(path, searchFile, callback) {
  fs.readdir(path, function (err, files) {
    if(err) { return callback(err); }
    files.forEach(function(file) {
     fs.stat(path+'/'+file, function() {
	if(err) { return callback(err); }
	if(stats.isFile() && file == searchFile) {
	  callback(undefined, path+'/'+file);
	  }
	 else if(stats.isDirectory()) {
	  findFile(path+'/'+file, searchFile, callback);
	}
      });
    });
  });
}
findFile('./test', 'needle.txt', function(err, path) {
  if(err) {throw err; }
  console.log('Found file at: '+path);
});
