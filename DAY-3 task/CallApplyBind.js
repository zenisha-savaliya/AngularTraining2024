const person1 = {
  firstname: "zenisha",
  lastname: "savaliya",
  fullname: function (prefix, suffix) {
    let fullName = this.firstname + " " + this.lastname;
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
  firstname: "dhruv",
  lastname: "savaliya",
};

// Using call
person1.fullname.call(person2, "Mr", "Hello From call Method");

// Using apply
person1.fullname.apply(person2, ["Mr"]);

// Using bind
const bindFullname = person1.fullname.bind(person2);
bindFullname("", "Hello From bind Method");
