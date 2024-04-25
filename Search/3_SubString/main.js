/* 이거 long 문자열에서 short 문자열이 몇 번 나오는지 갯수 반환하는 함수임 */

function naiveSearch(long, short){
  var idx = short.length;
  var cnt = 0;
  for(var i=0; i<long.length; i++){
    for(var j=0; j<short.length; j++){
      if(long[i+j] !== short[j]){
        break;
      }
      if(j===short.length - 1){
        cnt++;
      }
    }
  }
  return cnt;
}

console.log(naiveSearch("Hello World", "World"));
