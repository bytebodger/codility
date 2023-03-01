export const WordsFromInventory = () => {
   const getMaxWordsFromInventory = (inventory, words) => {
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

   return <>
      There is a company that sells large letters made out of wood and metal (similar to the ones spelling "HOLLYWOOD").  The company is
      going out of business, and the owners want to sell off their remaining stock.  They have listed all the remaining letters in a catalog in a
      string S (in no particular order), and have advertised their "Everything must go" offer online.
      <br/><br/>
      Attracted by the reduced prices, Alice has decided to order some letters from the company.  She wants to build as many signs with the
      name of her new blog as possible and place them around the city.  She hasn't decided on the name of her blog yet, and is considering K
      different possibilities.  Right now she is wondering about the maximum number of signs she can build if she chooses one of the names
      from her list.
      <br/><br/>
      Knowing the list of possible names of Alice's blog L and the company catalog state S, find the maximum number of copies of a name
      from L that Alice can build.
      <br/><br/>
      Write a function:
      <br/><br/>
      function solutions(S, L);
      <br/><br/>
      that, given the string S and the list L consisting of K strings, returns the maximum number of copies of a string from L that can be built
      only using letters from S.
      <br/><br/>
      Examples:
      <br/><br/>
      1. Given S = "BILLOBILLOLLOBBI", L = ["BILL, "BOB"], the function should return 3.  The sign "BILL" can be built three times using
      the letters from S and the sign "BOB" can be built only twice.
      <br/><br/>
      2. Given S = "CAT", L = ["ILOVEMYDOG", "CATS"], the function should return 0.  None of the proposed names can be built using the
      letters from S.
      <br/><br/>
      3. Given S = "ABCDXYZ", L = ["ABCD", "XYZ"], the function should return 1.  Both signs "ABCD" and "XYZ" can be built only once using
      the letters from S.
      <br/><br/>
      Assume that:
      <br/><br/>
      The length of string S is within the range [1... 100];<br/>
      K is an integer within the range [1... 10];<br/>
      The lengths of the strings in L are within the range [1... 100];<br/>
      String S is made only of uppercase letters (A-Z);<br/>
      Strings in L consist only of uppercase letters (A-Z).
      <br/><br/>
      In your solution, focus on correctness.  The performance of your solution will not be the focus of the assessment.
      <div>
         Examples:
         <br/><br/>
         'BILLOBILLOLLOBBI', ['BILL', 'BOB'] = {getMaxWordsFromInventory('BILLOBILLOLLOBBI', ['BILL', 'BOB'])}
         <br/>
         'CAT', ['ILOVEMYDOG', 'CATS'] = {getMaxWordsFromInventory('CAT', ['ILOVEMYDOG', 'CATS'])}
         <br/>
         'ABCDXYZ', ['ABCD', 'XYZ'] = {getMaxWordsFromInventory('ABCDXYZ', ['ABCD', 'XYZ'])}
      </div>
   </>
}