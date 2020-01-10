export function getData() {
  // returns a promise with an Error
  return new Promise((_, reject) => {
    return setTimeout(() => {
      reject(Error("Can't load data"));
    }, 2000);
  });
}
