// Do not change any of the function names

const makeCat = (name, age) => {
  // create a new object with a name property with the value set to the name argument
  // add an age property to the object with the value set to the age argument
  // add a method called meow that returns the string 'Meow!'
  // return the object
  const cat = {
    name,
    age,
    meow() { return 'Meow!'; }
  };

  return cat;
};

const addProperty = (object, property) => {
  // add the property to the object with a value of null
  // return the object
  // note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)
  object[property] = null;

  return object;
};

const invokeMethod = (object, method) => {
  // method is a string that contains the name of a method on the object
  // invoke this method
  // nothing needs to be returned
  object[method]();
};

const multiplyMysteryNumberByFive = (mysteryNumberObject) => {
  // mysteryNumberObject has a property called mysteryNumber
  // multiply the mysteryNumber property by 5 and return the product
  return mysteryNumberObject.mysteryNumber * 5;
};

const deleteProperty = (object, property) => {
  // remove the property from the object
  // return the object
  delete object[property];
  return object;
};

const newUser = (name, email, password) => {
  // create a new object with properties matching the arguments passed in.
  // return the new object
  return { name, email, password };
};

const hasEmail = (user) => {
  // return true if the user has a value for the property 'email'
  // otherwise return false
  return !!user.email;
};

const hasProperty = (object, property) => {
  // return true if the object has the value of the property argument
  // property is a string
  // otherwise return false
  return Object.prototype.hasOwnProperty.call(object, property);
};

const verifyPassword = (user, password) => {
  // check to see if the provided password matches the password property on the user object
  // return true if they match
  // otherwise return false
  return user.password === password;
};

const updatePassword = (user, newPassword) => {
  // replace the existing password on the user object with the value of newPassword
  // return the object
  user.password = newPassword;
  return user;
};

const addFriend = (user, newFriend) => {
  // user has a property called friends that is an array
  // add newFriend to the end of the friends array
  // return the user object
  user.friends.push(newFriend);
  return user;
};

const setUsersToPremium = (users) => {
  // users is an array of user objects.
  // each user object has the property 'isPremium'
  // set each user's isPremium property to true
  // return the users array
  users.forEach(user => user.isPremium = true);
  return users;
};

const sumUserPostLikes = (user) => {
  // user has an array property called 'posts'
  // posts is an array of post objects
  // each post object has an integer property called 'likes'
  // sum together the likes from all the post objects
  // return the sum
  return user.posts.reduce((likes, post) => {
    return likes + post.likes;
  }, 0);
};

const addCalculateDiscountPriceMethod = (storeItem) => {
  // Add a method to the storeItem object called 'calculateDiscountPrice'
  // This method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  // The method then subtracts the discount from the price and returns the discounted price
  // example:
  // price -> 20
  // discountPercentage -> .2
  // discountPrice = 20 - (20 * .2)
  // Make sure you return storeItem after adding the method to it
  // hint: arrow functions don't bind a this
  storeItem.calculateDiscountPrice = function calculateDiscountPrice() {
    const discount = this.price * this.discountPercentage;
    return this.price - discount;
  };

  return storeItem;
};

// Do not modify code below this line.
// --------------------------------

module.exports = {
  makeCat,
  addProperty,
  invokeMethod,
  multiplyMysteryNumberByFive,
  deleteProperty,
  newUser,
  hasEmail,
  hasProperty,
  verifyPassword,
  updatePassword,
  addFriend,
  setUsersToPremium,
  sumUserPostLikes,
  addCalculateDiscountPriceMethod
};
