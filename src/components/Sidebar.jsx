import React from "react";
import { Link } from "react-router-dom";

class TreeNode {
  constructor(title, link) {
    this.title = title;
    this.link = link;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }
}

const buildMenuTree = () => {
  const root = new TreeNode("Home", "/");

  const products = new TreeNode("Products", "/products");
  products.addChild(new TreeNode("Phones", "/products/phones"));
  products.addChild(new TreeNode("Laptops", "/products/laptops"));

  const about = new TreeNode("About", "/about");

  root.addChild(products);
  root.addChild(about);

  return root;
};

const renderTree = (node) => (
  <li key={node.title}>
    <Link to={node.link}>{node.title}</Link>
    {node.children.length > 0 && (
      <ul>
        {node.children.map((child) => renderTree(child))}
      </ul>
    )}
  </li>
);

const Sidebar = () => {
  const tree = buildMenuTree();
  return (
    <div className="sidebar">
      <h3>Menú</h3>
      <ul>
        {renderTree(tree)}
      </ul>
    </div>
  );
};

export default Sidebar;
