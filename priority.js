//Queue implementation using constructor method
function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

//Enqueue add element at the end of the queue
function enqueue(element) {
  this.dataStore.push(element);
}

//dequeue remove item at the front of the queue
function dequeue(){
  return this.dataStore.shift();
}

//front() examine element at the fron of the queue
function front() {
  return this.dataStore[0];
}

//back() examine item at the end of the queue
function back() {
  return this.dataStore[this.dataStore.length -1];
}

//toString() displays all element of the queue
function toString() {
  var retStr = "";
  for (var i = 0; i < this.dataStore.length; i++) {
    retStr += this.dataStore[i] + "\n";
  }
  return retStr;
}

//empty() checks if the queue is empty
function empty() {
  if(this.dataStore.length == 0) {
    return true;
  } else {
    return false;
  }
}


//Priority queue illustration using patient scenario
function Patient(name, code) {
  this.name = name;
  this.code = code;
}