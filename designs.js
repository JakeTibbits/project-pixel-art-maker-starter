
// Select canvas
const canvas = document.querySelector('#pixelCanvas');

// Change color on interaction
canvas.addEventListener('click', function (e) {
  //get paint colour
  const paintColor =  document.querySelector('#colorPicker').value;
  //change cell colour
  e.target.style.backgroundColor = paintColor;
});



// Select size input
const sizePicker = document.querySelector('#sizePicker');
// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(event){
  //prevent default submit behaviour
  event.preventDefault();
  //make grid
  makeGrid();
});



function makeGrid() {

  //remove the current grid
  canvas.innerHTML = '';

  //get width and height values
  const width = document.querySelector('#inputWidth').value;
  const height = document.querySelector('#inputHeight').value;

  //loop through height
  for (let x = 1; x <= height; x++) {

    //create a new row
    const row = document.createElement('tr');

    //append row to canvas
    canvas.appendChild(row)

    //loop through Width
    for (let y = 1; y <= width; y++) {

      //create a column
      const column = document.createElement('td');

      //append column to row
      row.appendChild(column);

    }
  }

  const bgColor =  document.querySelector('#bgPicker').value;
  canvas.style.backgroundColor = bgColor;



}
