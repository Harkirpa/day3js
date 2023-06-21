function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // some code (try to change x to 5)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
  //2
  let countValue = new Promise(function (resolve, reject) {
    resolve("Promise resolved");
  });
  
  // executes when promise is resolved successfully
  
  countValue
    .then(function successValue(result) {
      console.log(result);
    })
  
    .then(function successValue1() {
      console.log("You can call multiple functions this way.");
    });
 //5
 function hii() {
    let b = 1;
    function inner() {
        return b;
    }
    return inner;
}
let get_func_inner = hii();
 
console.log(get_func_inner());
console.log(get_func_inner());
console.log(get_func_inner());   