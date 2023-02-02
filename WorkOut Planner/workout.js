document.getElementById("save_data").addEventListener("click", SaveData); 

  var table = document.getElementById("workout_table");
  if(localStorage.getItem("workout")) {workout = localStorage.getItem("workout").split(',')}else {workout = []}
  if(localStorage.getItem("exercise")) {exercise = localStorage.getItem("exercise").split(',')}else {exercise = []}
  if(localStorage.getItem("goal")) {goal = localStorage.getItem("goal").split(',')}else {goal = []}

  for(var i=0; i<workout.length; i++){
  console.log(workout,'pppppp',goal)

  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = workout[i];
  cell2.innerHTML = exercise[i];
  cell3.innerHTML = goal[i];

  }
 

  
function SaveData() {


  workout.push([document.getElementById("workout_name").value])
  exercise.push([document.getElementById("exercise").value])
    goal.push([document.getElementById("goal").value])
    var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  cell1.innerHTML = document.getElementById("workout_name").value;
  cell2.innerHTML = document.getElementById("exercise").value;
  cell3.innerHTML = document.getElementById("goal").value;

  console.log(workout,'llllllllllllldddddddddd',)
  localStorage.setItem("workout", workout)
    localStorage.setItem("exercise", exercise)
    localStorage.setItem("goal", goal)

  document.getElementById("workout_name").value=""
  document.getElementById("exercise").value=""
  document.getElementById("goal").value=""

}
 
