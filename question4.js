function conditionCheck(input) {
    if (typeof input === "number") {
      alert("The input is a number!");
    } 
    else if (typeof input === "string") {
      if (input === "Butter") {
        alert("The input is Butter!");
      } else {
        alert("I can't believe it's not Butter!");
      }
    } 
    else {
      alert("Help! The input is neither a number or a string!");
    }
  }
  
  conditionCheck(5);
  conditionCheck("Butter");
  conditionCheck("Hello");
  conditionCheck(true);
  