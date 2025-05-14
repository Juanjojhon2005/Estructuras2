
import React, { useState } from 'react';
import BinaryTreeVisualizer from './components/BinaryTreeVisualizer';
import BinaryTree from './components/BinaryTree';

const tree = new BinaryTree();
[50, 30, 70, 20, 40, 60, 80].forEach(n => tree.insert(n));
window.tree = tree;

console.log("InOrder:", tree.inOrder());
console.log("PreOrder:", tree.preOrder());
console.log("PostOrder:", tree.postOrder());
console.log("Contains 60:", tree.contains(60));

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <h1>Binary Tree Visualizer</h1>
      <BinaryTreeVisualizer root={tree.root} />
    </div>
  );
}
