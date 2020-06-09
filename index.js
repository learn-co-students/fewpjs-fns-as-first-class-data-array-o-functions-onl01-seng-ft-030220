let wakeDog = (name, breed) => {
  console.log(`Wake ${name} the ${breed}`);
  return `Wake ${name} the ${breed}`
}

let leashDog = (name, breed) => {
  console.log(`Leash ${name} the ${breed}`);
  return `Leash ${name} the ${breed}`;
}

let walkToPark = (name, breed) => {
  console.log(`Walk to the park with ${name} the ${breed}`);
  return `Walk to the park with ${name} the ${breed}`;
}

let throwFrisbee = (name, breed) => {
  console.log(`Throw the frisbee for ${name} the ${breed}`);
  return `Throw the frisbee for ${name} the ${breed}`;
}

let walkHome = (name, breed) => {
  console.log(`Walk home with ${name} the ${breed}`);
  return `Walk home with ${name} the ${breed}`;
}

let unleashDog = (name, breed) => {
  console.log(`Unleash ${name} the ${breed}`);
  return `Unleash ${name} the ${breed}`;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]


let exerciseDog = (dogName, dogBreed) => {
  let return_calls = []
  for(let i = 0; i < routine.length; i++) {
    return_calls.push(routine[i](dogName, dogBreed))
  }
  return return_calls
}
