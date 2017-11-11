const capitalize = (s,arr) => s.split('').map((e,i)=> arr.includes(i) ? e.toUpperCase() : e ).join('');

function capitalize (s,arr) {
  var arrFromString = s.split("");
  for(i = 0; i < arr.length; i++) {
    if (arrFromString.length >= arr[i]) {
       arrFromString[arr[i]] = arrFromString[arr[i]].toUpperCase();
    }  
  }
  var capString = arrFromString.join('');
  return capString;
};