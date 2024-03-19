const person1 = {
  firstName: "Zenisha",
  lastName: "Savaliya",
  fullName: function (prefix, suffix) {
    let fullName = this.firstName + " " + this.lastName;
    if (prefix) {
      fullName = prefix + " " + fullName;
    }
    if (suffix) {
      fullName = fullName + " " + suffix;
    }
    console.log(fullName);
  },
};

const person2 = {
  firstName: "Dhruv",
  lastName: "Savaliya",
};

// Using call
person1.fullName.call(person2, "Mr", "Hello From call Method");

// Using apply
person1.fullName.apply(person2, ["Mr"]);

// Using bind
const fullNameWithBind = person1.fullName.bind(person2);
fullNameWithBind("", "Hello From bind Method");
