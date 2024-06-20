export function graphParser(data) {
  const nodes = [];
  const links = [];
  const tagNodes = {};
  const contentNodes = {};

  // Collect tag nodes
  data.forEach((dat) => {
    dat.tags.forEach((tag) => {
      if (!tagNodes[tag.id]) {
        tagNodes[tag.id] = {
          linkId: `tag-${tag.id}`,
          type: "tag",
          name: tag.name,
          id: tag.id,
        };
      }
    });
  });

  // Collect content nodes and links
  data.forEach((dat) => {
    const contentNode = {
      linkId: `content-${dat.id}`,
      type: "content",
      content: dat.content,
      id: dat.id,
    };
    contentNodes[dat.id] = contentNode;

    dat.tags.forEach((tag) => {
      links.push({ source: `content-${dat.id}`, target: `tag-${tag.id}` });
    });
  });

  // Combine tag and content nodes into a single array
  Object.values(tagNodes).forEach((node) => nodes.push(node));
  Object.values(contentNodes).forEach((node) => nodes.push(node));

  return { nodes, links };
}
