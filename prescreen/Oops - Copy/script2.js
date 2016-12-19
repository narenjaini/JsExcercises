function outPut() {

  var array = document.getElementsByClassName("prescreen-input")[0].value.split("\n");
  console.log(array);
  var newArray = [];

  for(var a=0; a<array.length-1; a++){
     newArray.push(array[a].trim().split(":"));

  }
console.log(newArray);
var result = "";
var validatedArray =[];
  for(var i=0; i<array.length-1; i++){
    var sum = 0;
    var aa = newArray[i][0];

    if(validatedArray.indexOf(aa) < 0) {
      validatedArray.push(aa);
      for(var j =0; j<array.length-1; j++){
       var bb = newArray[j][0];
        if(aa == bb){
          sum = sum + parseInt(newArray[j][1]);
        }
      }
      result = result + "<p>"+ aa  +":" + sum + "</p>";

    }
    document.getElementById('output').innerHTML =  result;





  }

  function totalCount(name, value){
    this.name = name;
    this.value = value;
      console.log(name);
      console.log(value);

  } ;

};
