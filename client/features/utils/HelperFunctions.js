export function graphParser(data) {
  const nodes = [];
  const links = [];

  // collect nodes
  for (const dat of data) {
    const tags = dat.tags;
    for (const tag of tags) {
      const content = tag.name;
      if (!nodes.includes(content)) {
        nodes.push({ id: content });
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
