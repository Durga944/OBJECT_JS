// var dogs = {
//     Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
// };

// var x = dogs.hasOwnProperty("Snoopie");
// console.log(x);

// const createPerson = (name, age, gender) => {
//     // Only change code below this line
//     return {
//       name,
//       age,
//       gender
//     };
//     // Only change code above this line
//   };
// console.log(createPerson("durga",20,"femal"));


// getter
const obj = {
    log: ['a', 'b', 'c'],
    get latest() {
      if (this.log.length === 0) {
        return undefined;
      }
      return this.log[this.log.length - 1];
    }
  };
  
  console.log(obj.latest);

// setter
const language = {
    set current(name) {
      this.log.push(name);
    },
    log: []
  };
  
  language.current = 'EN';
  language.current = 'FA';
  
  console.log(language.log);


// export
export const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  uppercaseString();
  
  export const lowercaseString = (string) => {
    return string.toLowerCase()
  }
  lowercaseString();
