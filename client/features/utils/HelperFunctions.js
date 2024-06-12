export function graphParser(data) {
  const nodes = [];
  const links = [];
  const tagNodes = {};
  const contentNodes = {};

  // Collect tag nodes
  data.forEach((dat) => {
    dat.tags.forEach((tag) => {
      if (!tagNodes[tag.name]) {
        tagNodes[tag.name] = { id: tag.name, type: "tag" };
      }
    });
  });

  // Collect content nodes and links
  data.forEach((dat) => {
    const contentNode = { id: dat.id, type: "content", content: dat.content };
    contentNodes[dat.id] = contentNode;

    dat.tags.forEach((tag) => {
      links.push({ source: dat.id, target: tag.name });
    });
  });

  // Combine tag and content nodes into a single array
  Object.values(tagNodes).forEach((node) => nodes.push(node));
  Object.values(contentNodes).forEach((node) => nodes.push(node));

  return { nodes, links };
}

export function setStyles(
  primaryColor,
  secondaryColor,
  tertiaryColor,
  columns
) {
  document.documentElement.style.setProperty("--primary-color", primaryColor);
  document.documentElement.style.setProperty(
    "--secondary-color",
    secondaryColor
  );
  document.documentElement.style.setProperty("--tertiary-color", tertiaryColor);
  document.documentElement.style.setProperty("--grid-cols", columns);
}

// const nodes = [];
// const links = [];
// const tagCount = {};

// // collect nodes
// for (const dat of data) {
//   const tags = dat.tags;
//   for (const tag of tags) {
//     const content = tag.name;

//     tagCount[content] = (tagCount[content] || 0) + 1;

//     const existingNodeIndex = nodes.findIndex((node) => node.id === content);

//     if (existingNodeIndex === -1) {
//       // node doesn't exist yet
//       nodes.push({ id: content, count: tagCount[content] });
//     } else {
//       nodes[existingNodeIndex].count = tagCount[content];
//     }
//   }
// }

// // collect links
// const linkSet = new Set();
// for (const dat of data) {
//   const tags = dat.tags;

//   for (let i = 0; i < tags.length; i++) {
//     for (let j = i + 1; j < tags.length; j++) {
//       const source = tags[i].name;
//       const target = tags[j].name;

//       const variationOne = `${source}-${target}`;
//       const variationTwo = `${target}-${source}`;
//       if (!linkSet.has(variationOne) && !linkSet.has(variationTwo)) {
//         linkSet.add(variationOne);
//         links.push({ source, target });
//       }
//     }
//   }
// }

// return { nodes, links };
