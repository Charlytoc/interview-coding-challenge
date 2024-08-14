function LetterChanges(str) { 
    let _array = str.split('');
    let newString = _array.map(m => {
      if(m == ' ') return m;
      if(!/[a-z]/.test(m)) return m;
  
      let code = m.charCodeAt(0);
      let letter = String.fromCharCode(code + 1);
      if(code == 122) letter = 'a';
      
      if(/[aeiou]/.test(letter)) letter = letter.toUpperCase();
      return letter;
    }).join("")
    // code goes here  
    return newString; 
  
  }
     
  // keep this function call here 
  console.log(LetterChanges(readline()));