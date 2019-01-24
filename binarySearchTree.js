'use strict'

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key
    this.value = value
    this.parent = parent
    this.left = null
    this.right = null
  }

  insert(key, value) {
    if (this.key === null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      if (this.left === null) {
        this.left = new BinarySearchTree(key, value, this)
      } else {
        this.left.insert(key, value);
      } 
    } else {
      if (this.right === null) {
        this.right = new BinarySearchTree(key, value, this)
      } else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    if (this.key === key) {
      return this.value
    } else if (key < this.key && this.left) {
      return this.left.find(key)
    } else if (key > this.key && this.right) {
      return this.right.find(key)
    } else {
      throw new Error('Key error')
    }
  }

  remove(key) {
    if (this.key === key) {
      // if BST.key === key we're passing into remove
      if (this.left && this.right) {
        // if BST .left & .right exist
        const successor = this.right._findMin()
        this.key = successor.key
        this.value = successor.value
        successor.remove(successor.key)
      } else if (this.left) {
        this._replaceWith(this.left)
      } else if (this.right) {
        this._replaceWith(this.right)
      } else {
        this._replaceWith(null)
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key)
    } else if (key > this.key && this.right) {
      this.right.remove(key)
    } else {
      throw new Error('Key Error')
    }
  }

  _replaceWith(node) {
    if (this.parent) {
      // if BST .parent exists
      if (this === this.parent.left) {
        // if BST is its parent's left child
        this.parent.left = node // left child is equal to node
      } else if (this === this.parent.right) {
        // if BST is its parent's right child
        this.parent.right = node // right child is equal to node
      }
      if (node) {
        // if node
        node.parent = this.parent // node parent is equal to current parent
      }
    } else {
      // otherwise
      if (node) {
        // if node exists
        this.key = node.key // set values of this = node
        this.value = node.value
        this.left = node.left
        this.right = node.right
      } else {
        // otherwise
        this.key = null // set values of this to null (remove)
        this.value = null
        this.left = null
        this.right = null
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this
    }
    return this.left._findMin()
  }
}

function height(BST) {
  if (!BST) {
    return 0
  }
  let leftHeight = height(BST.left)
  let rightHeight = height(BST.right)
  return Math.max(leftHeight, rightHeight) + 1
}

function isSearchTree(BST) {
  if (!BST) {
    return true
  }
  if (BST.left != null && BST.left.value > BST.value) {
    return false
  }
  if (BST.right !== null && BST.right.value < BST.value) {
    return false
  }
  if (!isSearchTree(BST.right) || !isSearchTree(BST.left)) {
    return false
  }
  return true
}

//bst should contain a root
//should have left and right child
//should contain keys/contains
//if left child exists and left child's value is greater than the given BST value, return false
//if right child exists and right child is greater than the given BST value, return false
//if neither right or left child exist, return true
//else return false
//create a temp data store
//recursively call a function that takes the value and find out if
//parent or children exist

// 3rd largest node
// Given sorted search tree
// Find right most child
// Find parent of right most child
// Return left child of parent (if any)
// If no left child, return parent of parent
// Congrats, 3rd largest node


//Work on in future trying to find all future possibilities
function thirdMaxValue(node) {
  if (!node) {
    return 0
  }
  if (node.right) {
    return thirdMaxValue(node.right)
  }
  if (node.left) {
    return node.parent.value
  }
  if (node.parent.left) {
    return node.parent.left.value
  } else {
    return node.parent.parent.value
  }
}

//         5
//     2       7
//   1  3    6   9

// 1
// 2
// 3
// 4
// 5
// 6
// 7
//       4
//     2    6
//   1  3  5  7

function heightBalanced(root) {
  if (!root) {
    return true
  }
  let leftHeight = height(root.left)
  console.log(leftHeight)
  let rightHeight = height(root.right)
  console.log(rightHeight)
  if (Math.abs(leftHeight - rightHeight) <= 1 && heightBalanced(root.left) && heightBalanced(root.right)) {
    return true
  } else {
    return false
  }
}

//pre-order: 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90
//process node, recursively step left, recursively step right 

//in order: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90


//post-order: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25

//        25
//           90
//           / \
//          50  70
//      /      /
//     24    66
//    / \   / \
//   18 22 35 44
//   / \  / \/ \
//   15  31
//  / \
// 10 12
// /\
// 4

//key, value, parent, left, right = properties of BST

let BST = new BinarySearchTree()

//node is handled before the branches
function preOrder(root){
  if (!root){
    return;
  }
  if (root){
    console.log(root.value);
    preOrder(root.left);
    preOrder(root.right);
  };
};

//root is handled after the branches
function postOrder(root){
  if(!root){
    return;
  }
  if (root){
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.value);
  };
};

// function inOrder(root){

// };

BST.insert(25, 25);
BST.insert(15, 15);
BST.insert(50, 50);
BST.insert(10, 10);
BST.insert(24, 24);
BST.insert(35, 35);
BST.insert(70, 70);
BST.insert(4, 4);
BST.insert(12, 12);
BST.insert(18, 18);
BST.insert(31, 31);
BST.insert(44, 44);
BST.insert(66, 66);
BST.insert(90, 90);
BST.insert(22, 22);


// console.log(preOrder(BST))
console.log(postOrder(BST))



const nbst = new BinarySearchTree()
nbst.insert(4, 4)
nbst.insert(2, 2)
nbst.insert(1, 1)
nbst.insert(3, 3)
nbst.insert(6, 6)
nbst.insert(5, 5)
nbst.insert(7, 7)
// console.log(nbst.find(5))
// console.log(nbst.find(7))
// console.log(nbst)
// console.log(height(nbst))
// console.log(isSearchTree(nbst))
// console.log(thirdMaxValue(nbst))
// console.log(heightBalanced(nbst))

// console.log(nbst)
