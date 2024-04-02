export default function createArrayJsonTree(data, container) {
  container.innerHTML = "";
  const tree = jsonTree.create(data, container);
  tree.expand();
}
