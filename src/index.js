/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var triang=0, a, b, c;
  var triangmass=[];
    for(var i=0; i<preferences.length; i++) {
      if (triangmass.includes(i) == false){
          a=preferences[i];
          b=preferences[a-1];
          c=preferences[b-1];
          if (i==c-1 && a!=b && b!=c){
            triang=triang+1;
            triangmass=triangmass.concat(a-1, b-1, c-1);
          };
      };
    };
return triang;
};
