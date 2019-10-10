const doSomething = function(logData, name){
  
    logData(name);
}

doSomething(function(user){
    console.log(user);
}, 'Sumit')


doSomething(function(user){
    console.log(user.toUpperCase());
}, 'Sumit')