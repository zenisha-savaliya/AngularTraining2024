var personInfoObj = {
    firstName: "zenisha",
    lastName: "savaliya",
    age: 30,
    address: {
        street: "mahavir nagar",
        city: "ahmedabad",
        pincode: "385001"
    },
    contacts: ["8695475869", "zenisha.savaliya@bacancy.com"],
    getFullName: function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    },
    getFullAddress: function () {
        var _a = this.address, street = _a.street, city = _a.city, pincode = _a.pincode;
        return "".concat(street, ", ").concat(city, ", ").concat(pincode);
    }
};
console.log(personInfoObj.getFullName());
console.log(personInfoObj.getFullAddress());
console.log(personInfoObj.contacts);
