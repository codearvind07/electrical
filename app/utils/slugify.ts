// utils/slugify.ts
export const slugify = (text: string): string[] => {
  return text
    .replace(/Best\s/i, '') // remove "Best " prefix
    .replace(/\s+in\s+/i, '/') // convert " in " to path separator
    .split('/')
    .map((part) =>
      part
        .trim()
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // remove special chars
        .replace(/\s+/g, '-') // replace spaces with hyphen
    );
};
