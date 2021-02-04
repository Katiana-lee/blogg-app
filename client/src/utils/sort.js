const compareKey = (key) => (a, b) => {
  if (a[key] < b[key]) {
    return -1;
  }
  if (a[key] > b[key]) {
    return 1;
  }
  return 0;
};

// one liner
// const compareKey = key => (a, b) => a[key] == b[key]? (a[key] < b[key] ? -1 : 1) : 0

// compare blog post authors
export const aAZ = (arr) => arr.sort(compareKey("author"));
export const aZA = (arr) => arr.sort(compareKey("author")).reverse();

// compare blog post titles
export const tAZ = (arr) => arr.sort(compareKey("title"));
export const tZA = (arr) => arr.sort(compareKey("title")).reverse();

// compare timestamps between blog posts
export const mostRecent = (arr) =>
  arr.sort((a, b) => a.updatedAt.localeCompare(b.updatedAt));
export const leastRecent = (arr) =>
  arr.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
