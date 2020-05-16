 export const getMowerFinalPosition = (plan, initial_position, [...instructions]) =>{
   plan = plan.split(" "); 
   let position = initial_position.split(" "); 

    if(!isValideCoordinates(plan,position)) return 'Erreur de coordonnées!'
    
        instructions.map( instruction => {
            return move(position, instruction, plan);
          });
        
          return position.join(" ");
}

function move(coordinates, instruction, plan)
{
  
  switch (instruction) {
    case 'L':
    case 'R':
      coordinates = rotateTo(coordinates, instruction);
      break;
    case 'F':
      coordinates = moveFoward(coordinates, plan);
      break;
  }
  return coordinates;
}



function rotateTo(coordinates,direction_of_rotation) // N - W - E - S
{
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
  return coordinates ;
}


function moveFoward(coordinates, plan) // [1, 2, N]
{
  let absice = +coordinates[0]; 
  let ordonne = +coordinates[1];
  switch (coordinates[2]) {
    case 'N':
      ordonne = (ordonne + 1 <= +plan[1]) ? ordonne + 1 : ordonne ; 
      break;
    case 'W':
      absice = (absice - 1 >= 0) ? absice - 1 : absice ;
      break;
    case 'S':
      ordonne = (ordonne - 1 >= 0) ? ordonne - 1 : ordonne;
      break;
    case 'E':
      absice = (absice + 1 <= +plan[0]) ? absice + 1 : absice;
      break;
  }
    coordinates[0] = absice; coordinates[1] = ordonne;
    return coordinates;
}

function isValideCoordinates(plan, coordinates) {
    return  (+coordinates[0] >= 0 && +coordinates[0] <= +plan[0]) && (+coordinates[1] >= 0 && +coordinates[1] <= +plan[1]) ? true : false
}


