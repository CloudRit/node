var fs = require('fs');

var file = fs.createWriteStream('./data/out.txt', {flags: 'a'} );
file.write('Testing is enough \n');
file.end(function() {
//  test.done();
});
