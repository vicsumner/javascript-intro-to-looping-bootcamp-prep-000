function forLoop(array){
  for (let i = 0; i< 25;i++){
    if (i === 1){ 
      array.push("I am 1 strange loop.")
  }
  else {
  array.push(`I am ${i} strange loops.`)
  }
  }
    return array
}

function whileLoop(n){
  while (n > 0) {
  console.log(--n);
}
return "done"
}

// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
// var myBest = fruits.slice(-3, -1);

function doWhileLoop(array){
  var i = 0;
  function incrementVariable() {
  i = i + 1;
  do{
    array.pop(i);
}
  while (i < 5);
  array.length > 0 && incrementVariable()
  and we need to replace i < 5 with array.length > 0
}
  return array
}
