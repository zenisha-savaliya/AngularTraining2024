const personOne = {
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

const personTwo = {
  firstName: "Dhruv",
  lastName: "Savaliya",
};

// Using call
personOne.fullName.call(personTwo, "Mr", "Hello From call Method");

// Using apply
personOne.fullName.apply(personTwo, ["Mr"]);

// Using bind
const fullNameWithBind = personOne.fullName.bind(personTwo);
fullNameWithBind("", "Hello From bind Method");
