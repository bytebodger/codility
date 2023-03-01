export const FrogJmp = () => {
   const getMinimalJumps = (startingPosition, targetPosition, jumpLength) => Math.ceil((targetPosition - startingPosition) / jumpLength);

   return <>
      <div>
         A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y.
         The small frog always jumps a fixed distance, D.
         <br/><br/>
         Count the minimal number of jumps that the small frog must perform to reach its target.
         <br/><br/>
         Write a function:
         <br/><br/>
         function solution(X, Y, D);
         <br/><br/>
         that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.
         <br/><br/>
         For example, given:
         <br/><br/>
         X = 10<br/>
         Y = 85<br/>
         D = 30<br/>
         <br/>
         the function should return 3, because the frog will be positioned as follows:
         <br/><br/>
         after the first jump, at position 10 + 30 = 40<br/>
         after the second jump, at position 10 + 30 + 30 = 70<br/>
         after the third jump, at position 10 + 30 + 30 + 30 = 100<br/>
         Write an efficient algorithm for the following assumptions:<br/>
         <br/><br/>
         X, Y and D are integers within the range [1..1,000,000,000];<br/>
         X ≤ Y.
      </div>
      <br/>
      <div>
         Examples:
         <br/><br/>
         10, 85, 30 = {getMinimalJumps(10, 85, 30)}
      </div>
   </>
}