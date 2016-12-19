function outPut() {

  var array = document.getElementsByClassName("prescreen-input")[0].value.split("\n");
  console.log(array);
  var newArray = [];
  var originial=[]
  for(var a=0; a<array.length-1; a++){
     var c =(array[a].trim().split(":"));
    //  console.log(newArray[a]);
    for(var b=0; b<originial.length-1; b++){
      if(c[0] != originial[b]){
        originial.push(c[0]);
      }else{

      }
    }

  }
  // for(var a=0; a<array.length-1; a++){
  //    newArray.push(array[a].trim().split(":"));
  //   //  console.log(newArray[a]);
  // }
console.log(newArray);

  for(var i=0; i<array.length-1; i++){
    var newArray_copy = newArray;
    var sum = 0;
    var aa = newArray[i][0];
    for(var j =0; j<array.length-1; j++){
     var bb = newArray_copy[j][0];
      if(aa == bb){
        sum = sum + parseInt(newArray_copy[j][1]);
      }
      delete newArray_copy[i];
      document.getElementById('output').innerHTML =  aa +":" + sum;
    }

  }

  function totalCount(name, value){
    this.name = name;
    this.value = value;
      console.log(name);
      console.log(value);

  } ;

};
