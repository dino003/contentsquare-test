 export const printFinalPosition = (plan, position, [...instructions]) => {
   plan = plan.split(" "); 
    position = position.split(" "); 

    if(!isValideCoordinates(plan, position)) return 'Erreur de coordonnées!';
    
        instructions.map( instruction => {
            return getCurrentPosition(position, instruction, plan);
          });
        
          return position.join(" "); // 2 4 S
}

const getCurrentPosition = (coordinates, instruction, plan) => {
  
  switch (instruction) {
    case 'L':
    case 'R':
      coordinates = rotateTo(coordinates, instruction);
      break;
    case 'F':
      coordinates = getNextPosition(coordinates, plan);
      break;
  }
  return coordinates;
}



const rotateTo = (coordinates,direction_of_rotation) => { // N - W - E - S

  // N / L -> W  // N / R -> E  // S / L -> E // S / R -> W  // E / L -> N  // E / R -> S  // W / L -> S  // W / R -> N
  let new_orientation = null;
  switch (coordinates[2]) {
    case 'N':
      new_orientation = (direction_of_rotation === 'L') ? 'W' : 'E' ;
      break;
    case 'W':
      new_orientation = (direction_of_rotation === 'L') ? 'S' : 'N';
      break;
    case 'S':
      new_orientation = (direction_of_rotation === 'L') ? 'E' : 'W';
      break;
    case 'E':
      new_orientation = (direction_of_rotation === 'L') ? 'N' : 'S';
      break;
  }
  coordinates[2] = new_orientation;
  return coordinates;
}


const getNextPosition = (coordinates, plan) => { // [1, 2, N] (x, y, N)
  let x = +coordinates[0]; 
  let y = +coordinates[1];
  switch (coordinates[2]) {
    case 'N':
      y = (y + 1 <= +plan[1]) ? y + 1 : y; 
      break;
    case 'W':
      x = (x - 1 >= 0) ? x - 1 : x;
      break;
    case 'S':
      y = (y - 1 >= 0) ? y - 1 : y;
      break;
    case 'E':
      x = (x + 1 <= +plan[0]) ? x + 1 : x;
      break;
  }
    coordinates[0] = x; coordinates[1] = y;
    return coordinates;
}

const isValideCoordinates = (plan, coordinates) => { // boolean
    return  (+coordinates[0] >= 0 && +coordinates[0] <= +plan[0]) && (+coordinates[1] >= 0 && +coordinates[1] <= +plan[1]) ? true : false
}


