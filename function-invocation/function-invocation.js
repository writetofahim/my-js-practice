// Global object
function globalObject() {
  return this;
}
document.getElementById("demo").innerHTML = globalObject();

// local object
const localObject = {
  localObject: function () {
    return this;
  },
};
document.getElementById("demo").innerHTML = localObject.localObject();

// function as a function
function myFunction(a, b) {
  return a + b;
}
// document.getElementById("demo").innerHTML = myFunction(2, 7);
// The function above does not belong to any object. But in JavaScript there is always a default global object. In HTML the default global object is the HTML page itself, so the function above "belongs" to the HTML page.

// function as a method
const hisObject = {
  firstName: "Motalib",
  lastName: "Pathan",
  fullName: function () {
    return myObject.firstName + " " + myObject.lastName;
  },
};

const myObject = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
// document.getElementById("demo").innerHTML = hisObject.fullName();
