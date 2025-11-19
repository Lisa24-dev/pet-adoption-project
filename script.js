const pets = [];

function addPets(){
  const name = prompt("Enter pet's name: ");
  const type = prompt("Enter pet's type: ");
  const age = parseInt(prompt("Enter pet's age: "));
  const pet = {
    name: name,
    type: type,
    age: age,
  };
  pets.push(pet);
  alert("Pet added!");
}

function viewPets(){
  let petList = "List of pets:\n";
  for (const pet of pets){
    petList += `${pet.name} (${type}) - ${age} years old`;
  }
  alert(petList);
}