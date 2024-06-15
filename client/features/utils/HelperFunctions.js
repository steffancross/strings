export function graphParser(data) {
  const nodes = [];
  const links = [];
  const tagNodes = {};
  const contentNodes = {};

  // Collect tag nodes
  data.forEach((dat) => {
    dat.tags.forEach((tag) => {
      if (!tagNodes[tag.name]) {
        tagNodes[tag.name] = { id: tag.name, type: "tag", nameId: tag.id };
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
