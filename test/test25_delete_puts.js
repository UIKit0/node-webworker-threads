/*

If you don't want a thread to have the privilege of writing to stdout, simply delete its global puts symbol

*/

var Threads= require('webworker-threads');

function cb (err, msg) {
  if (err) {
    process.stdout.write("["+ this.id+ "] -> "+ err+ '\n');
  }
  this.destroy();
}

function ƒ () {
  puts("["+ thread.id+ "] -> puts('Hello!')\n");
}

var i= Math.abs(parseInt(process.argv[2], 10)) || 1;
console.log('Using '+ i+ ' threads');

Threads.createPool(i).all.eval('delete (global= this).puts; ('+ ƒ+ ')();', cb);
