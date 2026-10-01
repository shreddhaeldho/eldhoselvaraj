export const asset = (filePath) => {
  if (!filePath) return "";
  const clean = filePath.replace(/^\/+/, "").replace(/^assets\//, "");
  return `${import.meta.env.BASE_URL}assets/${clean}`;
};
