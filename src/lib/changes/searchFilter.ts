function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function buildSearchFilter(query: string) {
  const safeQuery = query.trim();

  if (!safeQuery) {
    return {};
  }

  return {
    $or: [
      { title: { $regex: escapeRegex(safeQuery), $options: "i" } },
      { description: { $regex: escapeRegex(safeQuery), $options: "i" } },
      { doctype: { $regex: escapeRegex(safeQuery), $options: "i" } },
    ],
  };
}
