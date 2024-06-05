const createPerson = (name, age, city) => ({
  name,
  age,
  address: {
    city,
  },
});

const person = createPerson("Avinash", 20, "hyd");

const personClone = JSON.parse(JSON.stringify(person));

personClone.name = "Sai";
personClone.address.city = "chennai";

console.table(person);
console.table(personClone);
