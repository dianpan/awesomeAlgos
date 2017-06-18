function Node(key) {
  this.key = key;
  this.left = null;
  this.right = null;

  this.insert = function(key){
    if(key < this.key) {
      if(this.left){
        this.left.insert(key)
      } else {
        this.left = new Node(key)
      }
    } else if(key > this.key) {
      if(this.right){
        this.right.insert(key)
      } else {
        this.right = new Node(key)
      }
    }
  }
  this.lookup = function(key){
    if(key == this.key){
      return this
    } else if (key < this.key && this.left) {
      return this.left.lookup(key)
    } else if (key > this.key && this.right) {
      return this.right.lookup(key)
    }
    return null
  }
}

var print = function(node, isRoot) {
  isRoot = isRoot == null ? true : isRoot;
  var null_left = "null_" + node.key + "_left";
  var null_right = "null_" + node.key + "_right"

  if (isRoot) {
    console.log("digraph BST {");
  }

  console.log("  " + node.key + " -> " + (node.left ? node.left.key : null_left));
  console.log("  " + node.key + " -> " + (node.right ? node.right.key : null_right));

  if (node.left) {
    print(node.left, false);
  } else {
    console.log("  " + null_left + " [shape=point]");
  }
  if (node.right) {
    print(node.right, false);
  } else {
    console.log("  " + null_right + " [shape=point]");
  }
  if (isRoot) {
    console.log("}");
  }
};

var input = [6,4,7,8,1,0,9,2]

var rootNode = null;

for (var i = 0; i < input.length; i++) {
  if (i === 0) {
    rootNode = new Node(input[i]["key"], input[i]["value"]);
  } else {
    rootNode.insert(input[i]["key"], input[i]["value"]);
  }
}

print(rootNode);
