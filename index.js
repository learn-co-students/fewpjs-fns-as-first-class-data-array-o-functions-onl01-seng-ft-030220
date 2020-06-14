const wakeDog = (dogName, dogBreed) => {
  let message = `Wake ${dogName} the ${dogBreed}`
  console.log(message)
  return message
}

const leashDog = (dogName, dogBreed) => {
  let message = `Leash ${dogName} the ${dogBreed}`
  console.log(message)
  return message
}

const walkToPark = (dogName, dogBreed) => {
  let message = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log(message)
  return message
}

const throwFrisbee = (dogName, dogBreed) => {
  let message = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(message)
  return message
}

const walkHome = (dogName, dogBreed) => {
  let message = `Walk home with ${dogName} the ${dogBreed}`
  console.log(message)
  return message
}

const unleashDog = (dogName, dogBreed) => {
  let message = `Unleash ${dogName} the ${dogBreed}`
  console.log(message)
  return message
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

const exerciseDog = (dogName, dogBreed) => {
  const messages = routine.map((exercise) => {
    return exercise(dogName, dogBreed)
  })
  return messages
}