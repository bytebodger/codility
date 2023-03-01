export const TapeEquilibrium = () => {
   const getMinimalDifference = array => {
      let minimalDifference = Number.MAX_SAFE_INTEGER;
      const arraySum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      let runningTotal = 0;
      array.forEach(value => {
         runningTotal += value;
         const difference = Math.abs(runningTotal - (arraySum - runningTotal));
         if (difference < minimalDifference)
            minimalDifference = difference;
      })
      return minimalDifference;
   }

   return <>
      <div>
         A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.
         <br/><br/>
         Any integer P, such that 0 {'<'} P {'<'} N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].
         <br/><br/>
         The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|
         <br/><br/>
         In other words, it is the absolute difference between the sum of the first part and the sum of the second part.
         <br/><br/>
         For example, consider array A such that:
         <br/><br/>
         A[0] = 3<br/>
         A[1] = 1<br/>
         A[2] = 2<br/>
         A[3] = 4<br/>
         A[4] = 3<br/>
         We can split this tape in four places:
         <br/><br/>
         P = 1, difference = |3 − 10| = 7<br/>
         P = 2, difference = |4 − 9| = 5<br/>
         P = 3, difference = |6 − 7| = 1<br/>
         P = 4, difference = |10 − 3| = 7<br/>
         Write a function:
         <br/><br/>
         function solution(A);
         <br/><br/>
         that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.
         <br/><br/>
         For example, given:
         <br/><br/>
         A[0] = 3<br/>
         A[1] = 1<br/>
         A[2] = 2<br/>
         A[3] = 4<br/>
         A[4] = 3<br/>
         the function should return 1, as explained above.
         <br/><br/>
         Write an efficient algorithm for the following assumptions:
         <br/><br/>
         N is an integer within the range [2..100,000];<br/>
         each element of array A is an integer within the range [−1,000..1,000].
      </div>
      <br/>
      <div>
         Examples:
         <br/><br/>
         [3, 1, 2, 4, 3] = {getMinimalDifference([3, 1, 2, 4, 3])}
      </div>
   </>
}