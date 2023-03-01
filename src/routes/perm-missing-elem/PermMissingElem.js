export const PermMissingElem = () => {
   const findMissingElement = array => {
      const arrayInfo = {};
      const valueInfo = {
         oneAboveExists: false,
         oneBelowExists: false,
      }
      const smallestValue = Math.min(...array);
      const largestValue = Math.max(...array);
      array.forEach(value => {
         if (value !== smallestValue) {
            if (!Object.hasOwn(arrayInfo, value - 1))
               arrayInfo[value - 1] = {...valueInfo};
            arrayInfo[value - 1].oneAboveExists = true;
         }
         if (value !== largestValue) {
            if (!Object.hasOwn(arrayInfo, value + 1))
               arrayInfo[value + 1] = {...valueInfo};
            arrayInfo[value + 1].oneBelowExists = true;
         }
      })
      const entries = Object.entries(arrayInfo);
      for (let i = 0; i < entries.length; i++) {
         let [value, valueInfo] = entries[i];
         value = parseInt(value, 10);
         if (value !== smallestValue && !valueInfo.oneBelowExists)
            return value - 1;
         else if (value !== largestValue && !valueInfo.oneAboveExists)
            return value + 1;
      }
   }

   return <>
      <div>
         An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
         <br/><br/>
         Your goal is to find that missing element.
         <br/><br/>
         Write a function:
         <br/><br/>
         function solution(A);
         <br/><br/>
         that, given an array A, returns the value of the missing element.
         <br/><br/>
         For example, given array A such that:
         <br/><br/>
         A[0] = 2<br/>
         A[1] = 3<br/>
         A[2] = 1<br/>
         A[3] = 5<br/>
         the function should return 4, as it is the missing element.
         <br/><br/>
         Write an efficient algorithm for the following assumptions:
         <br/><br/>
         N is an integer within the range [0..100,000];<br/>
         the elements of A are all distinct;<br/>
         each element of array A is an integer within the range [1..(N + 1)].
      </div>
      <br/>
      <div>
         Examples:
         <br/><br/>
         [2, 3, 1, 5] = {findMissingElement([2, 3, 1, 5])}
      </div>
   </>
}