
function printReverse(array) {
  for (var i = array.length-1; i >= 0; i--) {
    console.log(array[i]);
  }
}

printReverse([3,6,2,5]);

var arr = [1,2,3,4,5];

printReverse(arr);

// This is where isUniform starts

function isUniform(uni) {
  var first = uni[0];
  for (var i = 1; i < uni.length; i++) {
    if(uni[i] !== first){
      return false;
    }
  }
  return true;

}

var tru = [1,1,1,1,1];

var fal = [1,1,1,2,1,1];

isUniform(tru);

isUniform(fal);

isUniform([1,1,1,1,1]);
