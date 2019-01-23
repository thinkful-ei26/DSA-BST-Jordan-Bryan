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
      this.key = key
      this.value = value
    } else if (key < this.key) {
      if (this.left === null) {
        this.left = new BinarySearchTree(key, value, this)
      } else {
        this.left.insert(key, value)
      }
    } else {
      if (this.right === null) {
        this.right = new BinarySearchTree(key, value, this)
      } else {
        this.right.insert(key, value)
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

//         5
//     2       7
//   1  3    6   9
// .5

const nbst = new BinarySearchTree()
nbst.insert(3, 3)
nbst.insert(1, 1)
nbst.insert(4, 4)
nbst.insert(6, 6)
nbst.insert(9, 9)
nbst.insert(2, 2)
nbst.insert(5, 5)
nbst.insert(7, 7)
nbst.remove(6)
console.log(nbst.find(5))
console.log(nbst.find(7))

// console.log(nbst)
