function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`)
   let string = `Wake ${dogName} the ${dogBreed}`
   return string
  }

  function leashDog(dogName, dogBreed) {
    console.log(`Leash ${dogName} the ${dogBreed}`)
   let string = `Leash ${dogName} the ${dogBreed}`
   return string
  }

  function walkToPark(dogName, dogBreed) {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`)
   let string = `Walk to the park with ${dogName} the ${dogBreed}`
   return string
  }

  function throwFrisbee(dogName, dogBreed) {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`)
   let string = `Throw the frisbee for ${dogName} the ${dogBreed}`
   return string
  }

  function walkHome(dogName, dogBreed) {
    console.log(`Walk home with ${dogName} the ${dogBreed}`)
   let string = `Walk home with ${dogName} the ${dogBreed}`
   return string
  }

  function unleashDog(dogName, dogBreed) {
    console.log(`Unleash ${dogName} the ${dogBreed}`)
   let string = `Unleash ${dogName} the ${dogBreed}`
   return string
  }

  const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]
  let newArray = []
  function exerciseDog(dogName, dogBreed) {
      for (var i = 0; i < routine.length; i++){
          //console.log(routine[i](dogName, dogBreed))
        
        newArray.push(routine[i](dogName, dogBreed))
       
      }
      return newArray
  }