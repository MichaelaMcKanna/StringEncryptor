class ShiftCipher{
    constructor(shift){
      this.shift = shift;
    }
    encrypt(string){
      let result = '';
      string = string.toUpperCase();
  
      for(let i = 0; i < string.length; i++){
        let num = string.charCodeAt(i);
  
        if (num <= 90 && num >=65){
          num += this.shift;
          if(num > 90){
            num -=26;
          }
        }
        result += String.fromCharCode(num);
      }
      return result;
    }
    decrypt(message){
       let result = '';
      message = message.toLowerCase();
  
      for(let i = 0; i < message.length; i++){
        let num = message.charCodeAt(i);
  
        if (num <= 122 && num >=97){
          num -= this.shift;
          if(num < 97){
            num += 26;
          }
        }
        result += String.fromCharCode(num);
      }
      return result;
    }
  }
  const cipher = new ShiftCipher(2);
  
  console.log(cipher.encrypt('hello mama'));
  console.log(cipher.decrypt('JGNNQ OCOC'));