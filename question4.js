function condtionCheck(input) {
    if (typeof input === "number") {
      alert("The input is a number!");
    } 
    else if (typeof input === "string") {
      alert("The input is a string!");
    } 
    else {
      alert("Help! The input is neither a number or a string!");
    }
  }
  
  condtionCheck(5);
  condtionCheck("Hello");
  condtionCheck(true);
  