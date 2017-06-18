var hash = module.exports = function(obj) {
  var str = JSON.stringify(obj);
  var result = 0;

  for (var i = 0; i < str.length; i++) {
    //charCodeAt => utf16 encoding of a string
    var ch = str.charCodeAt(i);
    result = ((result << 5) - result) + ch;
    result |= 0;
  }

  return result;
};


function HashMap(size) {
  this.data = new Array(size);

  this.add = function(key, value) {
    var keyHash = hash(key) % this.data.length;
    this.data[keyHash] = value;
  };
  this.delete = function(key) {
    var keyHash = hash(key) % this.data.length;
    this.data[keyHash] = null;
     };
  this.get = function(key) {
    var keyHash = hash(key) % this.data.length;
    return this.data[keyHash];
  };

  this.print = function() {
    var root = Math.ceil(Math.sqrt(this.data.length));
    var square = root*root;
    console.log("P2");
    console.log(root+" "+root);
    console.log("2");

    var line = [];
    for (var i = 0; i < square; i++) {
      if (i >= this.data.length) {   line.push("1"); }
      else if (this.data[i]) {       line.push("0"); }
      else {                         line.push("2"); }

      if (i % root == root - 1) {
        console.log(line.join(" "));
        line = [];
      }
    }
  };
};
