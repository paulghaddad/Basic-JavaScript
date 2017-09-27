const getFirstItem = (collection, cb) => {
  // invoke the callback function and pass the first item from the collection in as an argument
  cb(collection[0]);
};

const getLength = (collection, cb) => {
  // Write a function called getLength that passes the length of the array into the callback
  cb(collection.length);
};

const getLastItem = (collection, cb) => {
  // Write a function called getLastItem which passes the getLastItem item of the array into the callback
  const lastItem = collection[collection.length - 1];

  cb(lastItem);
};

const sumNums = (x, y, cb) => {
  // Write a function called sumNums that adds two numbers and passes the result to the callback
  const sum = x + y;

  cb(sum);
};

const multiplyNums = (x, y, cb) => {
  // Write a function called multiplyNums that multiplies two numbers and passes the result to the callback
  const product = x * y;

  cb(product);
};

const contains = (collection, item, cb) => {
  // Write a function called contains that checks if an item is present inside of the given array.
  // Pass true to the callback if it is, otherwise pass false

  // Alternate: const itemPresent = collect.indexOf(item) !== -1 ? true : // false;

  const itemPresent = collection.includes(item);

  cb(itemPresent);
};

const removeDuplicates = (collection, cb) => {
  // Write a function called removeDuplicates that removes all duplicate values from the given array.
  // Pass the array to the callback function.  Do not mutate the original array.

  // Option 1
  // const uniqCollection = [];
  //
  // collection.forEach((element) => {
  //   if (!uniqCollection.includes(element)) {
  //     uniqCollection.push(element);
  //   }
  // });
  //
  // cb(uniqCollection);

  // Option 2
  const uniqCollection = collection.reduce(
    (acc, element) => (!acc.includes(element) ? acc.concat(element) : acc),
    []
  );

  cb(uniqCollection);
};

module.exports = {
  getFirstItem,
  getLength,
  getLastItem,
  sumNums,
  multiplyNums,
  contains,
  removeDuplicates
};
