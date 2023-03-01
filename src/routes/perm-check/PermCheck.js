export const PermCheck = () => {
   const getMaxAllWordsFromInventory = (inventory, words) => {
      let maximum = 0;
      words.forEach(word => {
         let count = 0;
         const inventoryArray = inventory.split('');
         const wordArray = word.split('');
         if (wordArray.length > inventoryArray.length)
            return;
         while (inventoryArray.length >= wordArray.length) {
            for (let i = 0; i < wordArray.length; i++) {
               const letter = wordArray[i];
               const targetIndex = inventoryArray.indexOf(letter);
               if (targetIndex === -1)
                  return;
               inventoryArray.splice(targetIndex, 1);
            }
            count++;
            if (count > maximum)
               maximum = count;
         }
      })
      return maximum;
   }


   const isAPermutation = array => {
      const slots = {};
      const minimumValue = Math.min(...array);
      const maximumValue = Math.max(...array);
      if (minimumValue !== 1 || maximumValue !== array.length)
         return 0;
      for (let i = 0; i < array.length; i++) {
         if (Object.hasOwn(slots, array[i]))
            return 0;
         slots[array[i]] = 1;
      }
      return 1;
   }

   return <>
      A non-empty array A consisting of N integers is given.
      <br/><br/>
      A permutation is a sequence containing each element from 1 to N once, and only once.
      <br/><br/>
      For example, array A such that:
      <br/><br/>
      A[0] = 4<br/>
      A[1] = 1<br/>
      A[2] = 3<br/>
      A[3] = 2<br/>
      is a permutation, but array A such that:
      <br/><br/>
      A[0] = 4<br/>
      A[1] = 1<br/>
      A[2] = 3<br/>
      is not a permutation, because value 2 is missing.
      <br/><br/>
      The goal is to check whether array A is a permutation.
      <br/><br/>
      Write a function:
      <br/><br/>
      function solution(A);
      <br/><br/>
      that, given an array A, returns 1 if array A is a permutation and 0 if it is not.
      <br/><br/>
      For example, given array A such that:
      <br/><br/>
      A[0] = 4<br/>
      A[1] = 1<br/>
      A[2] = 3<br/>
      A[3] = 2<br/>
      the function should return 1.
      <br/><br/>
      Given array A such that:
      <br/><br/>
      A[0] = 4<br/>
      A[1] = 1<br/>
      A[2] = 3<br/>
      the function should return 0.
      <br/><br/>
      Write an efficient algorithm for the following assumptions:
      <br/><br/>
      N is an integer within the range [1..100,000];<br/>
      each element of array A is an integer within the range [1..1,000,000,000].
      <br/>
      <div>
         Examples:
         <br/><br/>
         [4, 1, 3, 2] = {isAPermutation([4, 1, 3, 2])}
         <br/>
         [4, 1, 3] = {isAPermutation([4, 1, 3])}
      </div>
      <br/>
      <div>
      'BILLOBILLOLLOBBI', ['BILL', 'BOB'] = {getMaxAllWordsFromInventory('BILLOBILLOLLOBBI', ['BILL', 'BOB'])}
      <br/>
      'CAT', ['ILOVEMYDOG', 'CATS'] = {getMaxAllWordsFromInventory('CAT', ['ILOVEMYDOG', 'CATS'])}
      <br/>
      'ABCDXYZ', ['ABCD', 'XYZ'] = {getMaxAllWordsFromInventory('ABCDXYZ', ['ABCD', 'XYZ'])}
      </div>
   </>
}