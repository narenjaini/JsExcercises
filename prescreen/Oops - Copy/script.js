function totalCount() {

  var array = document.getElementsByClassName("prescreen-input")[0].value.split("\n"),
      len = array.length-1,
      newArray = [],
      validatedArray = [],
      result = "";


  for(var i=0; i<len; i++){
     newArray.push(array[i].trim().split(":"));
  }

  for(var j=0; j<len; j++){
      var sum = 0,
          listedName = newArray[j][0];

    if(validatedArray.indexOf(listedName) < 0) {
      validatedArray.push(listedName);
      for(var k=0; k<len; k++){
          var tempName = newArray[k][0];
          if(listedName == tempName){
            sum = sum + parseInt(newArray[k][1]);
          }
      }
      result = result + "<p>"+ listedName  +":" + sum + "</p>";
    }
    document.getElementsByClassName('prescreen-output')[0].innerHTML =  result;

  }

};
