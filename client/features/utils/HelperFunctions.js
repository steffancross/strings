export function graphParser(data) {
  const nodes = [];
  const links = [];
  const tagCount = {};

  // collect nodes
  for (const dat of data) {
    const tags = dat.tags;
    for (const tag of tags) {
      const content = tag.name;

      tagCount[content] = (tagCount[content] || 0) + 1;

      const existingNodeIndex = nodes.findIndex((node) => node.id === content);

      if (existingNodeIndex === -1) {
        // node doesn't exist yet
        nodes.push({ id: content, count: tagCount[content] });
      } else {
        nodes[existingNodeIndex].count = tagCount[content];
      }
    }
  }

  // collect links
  const linkSet = new Set();
  for (const dat of data) {
    const tags = dat.tags;

    for (let i = 0; i < tags.length; i++) {
      for (let j = i + 1; j < tags.length; j++) {
        const source = tags[i].name;
        const target = tags[j].name;

        const variationOne = `${source}-${target}`;
        const variationTwo = `${target}-${source}`;
        if (!linkSet.has(variationOne) && !linkSet.has(variationTwo)) {
          linkSet.add(variationOne);
          links.push({ source, target });
        }
      }
    }
  }

  return { nodes, links };
}
