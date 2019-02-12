const createPerson = (name, age) => {
  return { name: name, age: age };
};

const getName = (object) => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object.hasOwnProperty(property)) {
    return true;
  }
  return false;
};

const isOver65 = (person) => {
  if (person.age > 65) {
    return true;
  }
  return false;
};

const getAges = (people) => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.find(n => n.name === name);
};

const findHondas = (cars) => {
  return cars.filter(honda => honda.manufacturer === 'Honda');
};

const averageAge = (people) => {
  const ages = people.map(person => person.age);
  const sum = ages.reduce((a, b) => b += a);
  return sum / ages.length;
};

const createTalkingPerson = (name, age) => {
  const person = {
    name: name,
    age: age,
    introduce: (name) => {
      return `Hi ${name}, my name is ${person.name} and I am ${person.age}!`;
    },
  };
  return person;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};
