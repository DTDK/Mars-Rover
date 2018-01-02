//user inputs directions 
var userDirection = prompt("Hi, tell the rover where to move using the f, b, r or l key");
//user inputs Orientation 
var userOrientation = prompt("Please provide the robot with it´s orientation using the N, S, W or E keys");

//stores the size of th grid in an array, index-0 is rows and index-1 is columns
var gridSize = [10,10];
//create a variable named grid and assign it to a function which creates a 2 dimensional array with the dimensions specified in gridSize
var grid = drawGrid(gridSize[0],gridSize[1]);
//This variable holds the actual position that will be used to represent the rover on the grid.
var positionRepresent = [0,0];

var user = userDirection;



var roverOne = {
  // position of the rover on the grid using positionRepresent´s indexes as the values for the 2 dimensional array
  position: grid[positionRepresent[0]][positionRepresent[1]],
  orientation: userOrientation
}

//Function that takes the user directions and moves a rover in a grid  
function roverOneMove(user){
  console.log('Initial Orientation ' +roverOne.orientation);
//Checks for a valid orientation  
if(roverOne.orientation === 'N'|| roverOne.orientation ==='S'|| roverOne.orientation ==='E'|| roverOne.orientation ==='W'){
  
  
  for (var i = 0; i < user.length; i++){
    //Here we separate the string the user entered in to an array holing each string as a separate element in the array
    var direction = user.split(''); 
    if (roverOne.orientation === 'S'){
      
       switch(direction[i]){
         case  'f':
           positionRepresent[0]++;
           // wrapping the rover from edge to edge
           if (positionRepresent[0] >= gridSize[0]){
                positionRepresent[0] = 0;
           }
           console.log('F ' + positionRepresent[0]);
           break;
         case  'b':
             positionRepresent[0]--;
             // wrapping the rover from edge to edge
             if (positionRepresent[0] < 0) {
                positionRepresent[0] = (gridSize[0] - 1);
             }
             console.log('B ' + positionRepresent[0]);
             break;
         case  'l':
             roverOne.orientation = 'E';
             console.log('L '+roverOne.orientation);
             break;
         case  'r':
             roverOne.orientation = 'W'
             console.log('R '+roverOne.orientation);
             break;
          }
        }
        else if (roverOne.orientation === 'N'){
      
             switch(direction[i]){
               case  'f':
                  positionRepresent[0]--;
             // wrapping the rover from edge to edge
                  if (positionRepresent[0] < 0){
                      positionRepresent[0] = (gridSize[0] - 1);
                  }
                  console.log('F ' + positionRepresent[0]);
                  break;
               case  'b':
                   positionRepresent[0]++;
             // wrapping the rover from edge to edge
                   if (positionRepresent[0] >= gridSize[0]) {
                      positionRepresent[0] = 0;
                   }
                   console.log('B ' + positionRepresent[0]);
                   break;
               case  'l':
                   roverOne.orientation = 'W';
                   console.log('L '+roverOne.orientation);
                   break;
               case  'r':
                   roverOne.orientation = 'E'
                   console.log('R '+roverOne.orientation);
                   break;
          }
        }
        else if (roverOne.orientation === 'E'){
      
             switch(direction[i]){
               case  'f':
                  positionRepresent[1]++;
             // wrapping the rover from edge to edge
                  if (positionRepresent[1] >= gridSize[1]){
                      positionRepresent[1] = 0;
                  }
                  console.log('F ' + positionRepresent[1]);
                  break;
               case  'b':
                   positionRepresent[1]--;
           
                   if (positionRepresent[1] < 0) {
                      positionRepresent[1] = (gridSize[1] - 1);
                   }
                   console.log('B ' + positionRepresent[1]);
                   break;
               case  'l':
                   roverOne.orientation = 'N';
                   console.log('L '+roverOne.orientation);
                   break;
               case  'r':
                   roverOne.orientation = 'S'
                   console.log('R '+roverOne.orientation);
                   break;
          }
        }
        else if (roverOne.orientation === 'W'){
      
             switch(direction[i]){
               case  'f':
                  positionRepresent[1]--;
             // wrapping the rover from edge to edge
                  if (positionRepresent[1] < 0){
                      positionRepresent[1] = (gridSize[1] - 1);
                  }
                  console.log('F ' + positionRepresent[1]);
                  break;
               case  'b':
                   positionRepresent[1]++;
             // wrapping the rover from edge to edge
                   if (positionRepresent[1] >= gridSize[1] ) {
                      positionRepresent[1] = 0;
                   }
                   console.log('B ' + positionRepresent[1]);
                   break;
               case  'l':
                   roverOne.orientation = 'S';
                   console.log('L '+roverOne.orientation);
                   break;
               case  'r':
                   roverOne.orientation = 'N'
                   console.log('R '+roverOne.orientation);
                   break;
          }
        }
        //console.log('Final Position is  X: '+positionRepresent[1]+ ' Position Y: '+ positionRepresent[0]);
    }
  
}else{
  console.log('Please Use N, S , E or W as a value for the orientation propertie of the rover');
}
  console.log("New Rover Position: [" + positionRepresent[1] + ", "+ positionRepresent[0] + "]");
  console.log("New Rover Orientation: " + roverOne.orientation);
}

    


function drawGrid(rows,cols){
  
  var array = new Array (gridSize[0],gridSize[1]);
  
  for (var i = 0; i < rows; i++){ 
    array[i] = new Array(cols);
    }
  
   var gridRepresent = 0;
   for (var i = 0; i < gridSize[0]; i++){
     for (var j = 0; j < gridSize[1]; j++){
       array[i][j] = gridRepresent;
       gridRepresent = gridRepresent + 1; 
     }
   }
   return array;
 }
roverOneMove(user);