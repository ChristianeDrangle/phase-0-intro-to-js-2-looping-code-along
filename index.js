 
function writeCards( names,event ) {
    let messages = []
   for (let i = 0; i < names.length; i++ ) 
    messages.push( `Thank you, ${names [i]}, for the wonderful ${event} gift!`)
    return messages
   
  }




      const names = ["Guadalupe", "Ollie", "Aki"];

      function countDown(number) {
        for (let i = number; i>=0; i--)
        {console.log(i);}
      }