export const CentipedeGame = () => {
   const getFinalMessage = (assignedLetters = '', mustPassTo = []) => {
      const letterArray = assignedLetters.split('');
      const getMessage = (message, position) => {
         if (position === 0 && (message || !letterArray.length))
            return message;
         const currentMessage = message + letterArray[position];
         return getMessage(currentMessage, mustPassTo[position]);
      }
      return getMessage('', 0);
   }

   return <>
      There are N people, number from 0 to N-1, playing a game.  The K-th person is assigned the letter S[K].  At the beginning the 0th person
      sends a message, consisting of a single letter S[0], to the A[0]-th person.  When the K-th person receives the message, they append their
      letter S[K] to the message and forward it to A[K].  The game ends when the 0th person receives the message.  Find the final message.
      <br/><br/>
      Write a function:
      <br/><br/>
      function solution(S, A);
      <br/><br/>
      that given a String S and an array of integers A, both of length N, returns a string denoting the final message received by the 0th person.
      <br/><br/>
      Examples:
      <br/><br/>
      1. Given S = "cdeo" and A = [3, 2, 0, 1], your function should return "code".  At the beginning, the 0th person sends a message "c" to the 3rd
      person.  Next, the 3rd person forwards the message "co" to the 1st person.  After that the 1st person forwards the message "cod" to the
      2nd person.  After appending the letter 'e' to it, the 2nd person forwards it to the 0th person.  The final message, received by the 0th person, is
      "code".
      <br/><br/>
      2. Given S = "cdeenetpi" and A = [5, 2, 0, 1, 6, 4, 8, 3, 7], your function should return "centipede".
      <br/><br/>
      3. Given S = "bytdag" and A = [4, 3, 0, 1, 2, 5], your function should return "bat".  Notice, that not all letters from S have to be used.
      <br/><br/>
      Assume that:
      <br/><br/>
      N is an integer within the range [1... 1,000];<br/>
      String S is made only of lowercase letters (a-z);<br/>
      A contains all integers within range [0... N-1];<br/>
      S and A are both of length N.
      <br/><br/>
      In your solution, focus on correctness.  The performance of your solution will not be the focus of the assessment.
      <div>
         Examples:
         <br/><br/>
         'cdeo', [3, 2, 0, 1] = {getFinalMessage('cdeo', [3, 2, 0, 1])}
         <br/>
         'bytdag', [4, 3, 0, 1, 2, 5] = {getFinalMessage('bytdag', [4, 3, 0, 1, 2, 5])}
         <br/>
         'cdeenetpi', [5, 2, 0, 1, 6, 4, 8, 3, 7] = {getFinalMessage('cdeenetpi', [5, 2, 0, 1, 6, 4, 8, 3, 7])}
      </div>
   </>
}