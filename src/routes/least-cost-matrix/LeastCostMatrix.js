export const LeastCostMatrix = () => {
   const findLeastCostPath = (board = [[]]) => {
      const totalRows = board.length;
      const totalColumns = board[0].length;
      const valueOfLastCell = board[totalRows - 1][totalColumns - 1];

      const createCell = (row = 0, column = 0, distance = 0) => {
         return {
            column,
            distance,
            row,
         }
      }

      const sortCells = (cellA = {}, cellB = {}) => {
         if (cellA.distance !== cellB.distance)
            return cellA.distance - cellB.distance;
         return cellA.column === cellB.column ? cellA.row - cellB.row : cellA.column;
      }

      const distance = [];
      for (let row = 0; row < totalRows; row++) {
         distance.push([]);
         for (let column = 0; column < totalColumns; column++) {
            distance[row].push(Number.MAX_SAFE_INTEGER);
         }
      }

      const surroundingCells = [
         [0, -1],
         [1, 0],
         [0, 1],
         [-1, 0],
      ]
      const cells = [];
      cells.push(createCell(0, 0, 0));
      distance[0][0] = board[0][0];

      while (cells.length !== 0) {
         const cell = cells.shift();
         surroundingCells.forEach(surroundingCoordinates => {
            const [surroundingRow, surroundingColumn] = surroundingCoordinates;
            const column = cell.column + surroundingColumn;
            const row = cell.row + surroundingRow;
            if (row < 0 || row >= totalRows || column < 0 || column >= totalColumns)
               return;
            if (distance[row][column] > distance[cell.row][cell.column] + board[row][column]) {
               distance[row][column] = distance[cell.row][cell.column] + board[row][column];
               cells.push(createCell(row, column, distance[row][column]));
            }
         })
         cells.sort(sortCells);
      }

      return distance[totalRows - 1][totalColumns - 1] - valueOfLastCell;
   }

   return <>
      You will receive a bidimensional array of numbers, and your goal here is to find the least cost path to the array's last item.
      You can move to the right, left, up, and down but can not navigate on the diagonal.
      <br/><br/>
      Input and Output
      <br/><br/>
      You will receive an input like the one below:
      <br/><br/>
      [[42, 51, 22, 10,  0],<br/>
      [2,  50, 7,  6,   15],<br/>
      [4,  36, 8,  30,  20],<br/>
      [0,  40, 10, 100, 1]],<br/>
      <br/>
      Based on the input above, you will return the sum of all the indexes to get at the end, with the least cost paths, which is the following:
      <br/><br/>
      140
      <br/><br/>
      The least costly path to the last item is this:<br/>
      42 -> 2 -> 4 -> 36 -> 8 -> 7 -> 6 -> 15 -> 20 -> 1<br/>
      <div>
         Examples:
         <br/><br/>
         [<br/>
         [42, 51, 22, 10,  0],<br/>
         [2,  50, 7,  6,   15],<br/>
         [4,  36, 8,  30,  20],<br/>
         [0,  40, 10, 100, 1]<br/>
         ] = {findLeastCostPath([
            [42, 51, 22, 10,  0],
            [2,  50, 7,  6,   15],
            [4,  36, 8,  30,  20],
            [0,  40, 10, 100, 1]
         ])}
         <br/><br/>
         [<br/>
         [20, 1, 49, 64, 98, 4, 14, 50, 12, 82, 11, 36, 64, 93, 13, 39],<br/>
         [52, 85, 39, 77, 98, 33, 88, 84, 22, 40, 66, 13, 41, 18, 44, 44],<br/>
         [85, 23, 80, 61, 64, 16, 73, 19, 18, 45, 87, 84, 58, 25, 74, 28],<br/>
         [4, 51, 33, 99, 70, 76, 65, 85, 55, 9, 87, 42, 19, 34, 56, 71],<br/>
         [82, 81, 6, 22, 63, 30, 28, 51, 75, 38, 22, 23, 68, 65, 1, 3],<br/>
         [64, 1, 94, 63, 49, 53, 88, 9, 75, 25, 75, 60, 27, 58, 41, 57],<br/>
         [26, 14, 100, 100, 26, 95, 55, 78, 58, 95, 18, 3, 61, 25, 57, 98],<br/>
         [20, 57, 91, 21, 52, 1, 58, 42, 49, 2, 20, 28, 54, 34, 65, 39],<br/>
         [55, 72, 34, 66, 52, 0, 33, 5, 15, 20, 13, 98, 7, 40, 12, 47],<br/>
         [89, 43, 99, 33, 20, 67, 86, 70, 62, 78, 98, 80, 47, 3, 45, 98],<br/>
         ] = {findLeastCostPath([
            [20, 1, 49, 64, 98, 4, 14, 50, 12, 82, 11, 36, 64, 93, 13, 39],
            [52, 85, 39, 77, 98, 33, 88, 84, 22, 40, 66, 13, 41, 18, 44, 44],
            [85, 23, 80, 61, 64, 16, 73, 19, 18, 45, 87, 84, 58, 25, 74, 28],
            [4, 51, 33, 99, 70, 76, 65, 85, 55, 9, 87, 42, 19, 34, 56, 71],
            [82, 81, 6, 22, 63, 30, 28, 51, 75, 38, 22, 23, 68, 65, 1, 3],
            [64, 1, 94, 63, 49, 53, 88, 9, 75, 25, 75, 60, 27, 58, 41, 57],
            [26, 14, 100, 100, 26, 95, 55, 78, 58, 95, 18, 3, 61, 25, 57, 98],
            [20, 57, 91, 21, 52, 1, 58, 42, 49, 2, 20, 28, 54, 34, 65, 39],
            [55, 72, 34, 66, 52, 0, 33, 5, 15, 20, 13, 98, 7, 40, 12, 47],
            [89, 43, 99, 33, 20, 67, 86, 70, 62, 78, 98, 80, 47, 3, 45, 98],
         ])}
      </div>
   </>
}