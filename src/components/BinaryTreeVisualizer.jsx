
import React from 'react';
import Tree from 'react-d3-tree';

function convertToD3(node) {
  if (!node) return null;
  const result = {
    name: node.value.toString(),
    children: []
  };
  if (node.left) result.children.push(convertToD3(node.left));
  if (node.right) result.children.push(convertToD3(node.right));
  return result;
}

export default function BinaryTreeVisualizer({ root }) {
  const treeData = [convertToD3(root)];
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Tree data={treeData} />
    </div>
  );
}
