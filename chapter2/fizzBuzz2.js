'use strict';

for (let nr = 1; nr <= 100; nr++){
  if (nr % 3 === 0){
    if (nr % 5 === 0){
      console.log('FizzBuzz');      
    }
    else{
      console.log('Fizz');
    }
  }
  else if (nr % 5 === 0){
    console.log('Buzz');
  }
  else{
    console.log(nr);
  }	
}
