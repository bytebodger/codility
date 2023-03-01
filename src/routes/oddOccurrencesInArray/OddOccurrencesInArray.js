export const OddOccurrencesInArray = () => {
   const getOddOccurrencesInArray = array => {
      let oddValues = {};
      array.forEach(value => {
         if (Object.hasOwn(oddValues, value))
            delete oddValues[value];
         else
            oddValues[value] = null;
      })
      return Object.keys(oddValues)[0];
   }

   return <>
      <div>
         A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another
         element that has the same value, except for one element that is left unpaired.
         <br/><br/>
         For example, in array A such that:
         <br/><br/>
         A[0] = 9  A[1] = 3  A[2] = 9<br/>
         A[3] = 3  A[4] = 9  A[5] = 7<br/>
         A[6] = 9
         <br/><br/>
         the elements at indexes 0 and 2 have value 9,<br/>
         the elements at indexes 1 and 3 have value 3,<br/>
         the elements at indexes 4 and 6 have value 9,<br/>
         the element at index 5 has value 7 and is unpaired.
         <br/><br/>
         Write a function:
         <br/><br/>
         function solution(A);
         <br/><br/>
         that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.
         <br/><br/>
         For example, given array A such that:
         <br/><br/>
         A[0] = 9  A[1] = 3  A[2] = 9<br/>
         A[3] = 3  A[4] = 9  A[5] = 7<br/>
         A[6] = 9
         <br/><br/>
         the function should return 7, as explained in the example above.
         <br/><br/>
         Write an efficient algorithm for the following assumptions:
         <br/><br/>
         N is an odd integer within the range [1..1,000,000];<br/>
         each element of array A is an integer within the range [1..1,000,000,000];<br/>
         all but one of the values in A occur an even number of times.
      </div>
      <br/>
      <div>
         Examples:
         <br/><br/>
         [9, 3, 9, 3, 9, 7, 9] = {getOddOccurrencesInArray([9, 3, 9, 3, 9, 7, 9])}
      </div>
   </>
}