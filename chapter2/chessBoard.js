'use strict';

const size = 8;
const whiteChar = ' ';
const blackChar = '#';

// first line starts with white

for (let lineIndex = 0; lineIndex < size; lineIndex++){

  let firstChar, secondChar;
  if (lineIndex % 2 === 0){	
    firstChar = whiteChar; 	
    secondChar = blackChar; 
  }
  else{	
    firstChar = blackChar; 	
    secondChar = whiteChar; 
  }

  let line = '';	
  for (let charIndex = 0; charIndex < size; charIndex++){
    if (charIndex % 2 === 0){
      line += firstChar;
    }
    else{
      line += secondChar;
    }
  }

  console.log(line);
}
