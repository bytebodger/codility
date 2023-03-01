export const BinaryGap = () => {
   const getBinaryGap = integer => {
      let binaryString = integer.toString(2);
      let gap = 0;
      const blocksOfZeroes = binaryString.split('1');
      blocksOfZeroes.forEach((zeroes, index) => {
         if (index !== 0 && index !== blocksOfZeroes.length - 1 && zeroes.length > gap)
            gap = zeroes.length;
      })
      return gap;
   }

   return <>
      <div>
         A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
         <br/><br/>
         For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two
         binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary
         representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.
         <br/><br/>
         Write a function:
         <br/><br/>
         function solution(N);
         <br/><br/>
         that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.
         <br/><br/>
         For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32
         the function should return 0, because N has binary representation '100000' and thus no binary gaps.
         <br/><br/>
         Write an efficient algorithm for the following assumptions:
         <br/><br/>
         N is an integer within the range [1..2,147,483,647].
      </div>
      <br/>
      <div>
         Examples:
         <br/><br/>
         1041 (10000010001) = {getBinaryGap(1041)}
         <br/>
         32 (100000) = {getBinaryGap(32)}
         <br/>
         483 (111100011) = {getBinaryGap(483)}
         <br/>
         647 (1010000111) = {getBinaryGap(647)}
      </div>
   </>
}