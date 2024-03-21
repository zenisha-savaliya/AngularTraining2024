interface Address {
    street: string;
    city: string;
    pincode: string;
}

interface PersonInfo {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
    contacts: number[]|number|null; 
    getFullName(): string;
    getFullAddress(): string;
}

const personInfoObj: PersonInfo = {
    firstName: "zenisha",
    lastName: "savaliya",
    age: 30,
    address: {
        street: "mahavir nagar",
        city: "ahmedabad",
        pincode: "385001"
    },
    contacts:[1234567898,9586842849],
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    },
    getFullAddress(): string {
        const { street, city, pincode } = this.address;
        return `${street}, ${city}, ${pincode}`;
    }
};


console.log(personInfoObj.getFullName()); 
console.log(personInfoObj.getFullAddress()); 
console.log(personInfoObj.contacts); 
