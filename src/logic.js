class Logic {} 
Logic = (inputtxt, mode) => {

    function reverseIt(data) {

      // This function reverses a textarea
      // Copyright (C) 2002 Eliram Haklai
      // www.eliram.com

      let theLineChars = "\n\r";
      let theStraightChars = "";

      theStraightChars = "0123456789" + theStraightChars;
      theStraightChars = "./:-" + theStraightChars;
      theStraightChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" + theStraightChars;
      let theString = data
      let theReverse = "";
      let theReverseArea = "";
      let theStraightBuffer = "";
      let theLength = theString.length;
      for (let i = 0; i < theLength; i++) {
        if (theLineChars.indexOf(theString.charAt(i)) >= 0) {
          if (theStraightBuffer != "") {
            theReverse = theStraightBuffer + theReverse;
            theStraightBuffer = "";
          }
          theReverse = theReverse + theString.charAt(i);
        } else {
          if (theStraightChars.indexOf(theString.charAt(i)) >= 0) {
            theStraightBuffer = theStraightBuffer + theString.charAt(i);
          } else {
            if (theStraightBuffer != "") {
              theReverse = theStraightBuffer + theReverse;
              theStraightBuffer = "";
            }
            theReverse = theString.charAt(i) + theReverse;
          }
        }
        if (theString.charAt(i) == "\r") {
          theReverseArea = theReverseArea + theReverse;
          theReverse = "";
        }
      }
      if (theStraightBuffer != "") {
        theReverse = theStraightBuffer + theReverse;
        theStraightBuffer = "";
      }
      theReverseArea = theReverseArea + theReverse;
      console.log(theReverseArea);
      return theReverseArea

    }
    function replaceAll(str, find, replace) {
      return str.replace(new RegExp(find, 'g'), replace);
    }

    function reverseString(str) {
      return str.split("").reverse().join("");
    }
    function reverseSent(str) {

      return (str.split(/\s/).reverse().join(" "));
      // return str = arr.join(" ");
    }

    if (inputtxt != undefined) {


      var letters = /^[A-Za-z]+$/;
      if (inputtxt.match(letters)) {
        console.log(inputtxt);
        return inputtxt;
      }
      else {


        console.log(inputtxt.includes("\n") ? inputtxt = replaceAll(inputtxt, "\n", " !!!!!!!!!!!!!!!! ") : null);

        if (inputtxt.includes("!!!!!!!!!!!!!!!!")) { inputtxt = reverseSent(inputtxt) }
        let test = reverseIt(inputtxt)

        if (!mode) {
          let max = 0
          test = replaceAll(test, "!!!!!!!!!!!!!!!!", "\n")
          let lines = test.split('\n');
          for (let i = 0; i < lines.length; i++) {
            lines[i].length >= max ? max = lines[i].length : max = max
            lines[i] = reverseSent(lines[i])
            console.log(lines[i]);

          }
          console.log(max);



          for (let i = 0; i < lines.length; i++) {
            console.log(lines[i]);
            for (let j = 0; i < (max - lines[i]); i++) {

              console.log(lines[i] + 1);

            }
            lines[i] = "1".repeat(max - lines[i].length) + lines[i]

          }

          max = 0
          for (let i = 0; i < lines.length; i++) {
            lines[i].length >= max ? max = lines[i].length : max = max

            console.log(lines[i].length);

          }


          console.log(max);



          for (let i = 0; i < lines.length; i++) {
            console.log(lines[i]);
            for (let j = 0; i < (max - lines[i]); i++) {

              console.log(lines[i] + 1);

            }
            lines[i] = "1".repeat(i) + "1".repeat(max - lines[i].length) + lines[i]

          }

          //lines[0] =  "3" +  lines[0] 

          lines = lines.join("!!!!!!!!!!!!!!!!")
          lines = replaceAll(lines, "!!!!!!!!!!!!!!!!", "\n")
          lines = replaceAll(lines, " ", "2")
          return lines;


        }
        else {

          console.log(test);
          // test=  test.split('\n')
          test = reverseSent(test)
          test = replaceAll(test, "!!!!!!!!!!!!!!!!", "\n")


          return test
        }




        //  test = reverseIt(test)



        //  return reverseString(inputtxt);

        //  return reverseIt(inputtxt)
        //return inputtxt

      }
    }

  }
  export default Logic 