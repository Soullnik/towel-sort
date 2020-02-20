
// You should implement your task here.

module.exports = function towelSort (matrix) {
   if (!matrix) return [];
   let sortmatrix = matrix.reduce((res, arr, i) => {
       arr = i%2 == 1 ? arr.reverse() : arr;
       return res.concat(arr); 
   }, [])
   return sortmatrix;
}
