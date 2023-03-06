import { Routes, Route } from 'react-router-dom';
import { Index } from './routes/index/Index';
import { BinaryGap } from './routes/binary-gap/BinaryGap';
import { OddOccurrencesInArray } from './routes/odd-occurrences-in-array/OddOccurrencesInArray';
import { FrogJmp } from './routes/frog-jmp/FrogJmp';
import { PermMissingElem } from './routes/perm-missing-elem/PermMissingElem';
import { TapeEquilibrium } from './routes/tape-equilibrium/TapeEquilibrium';
import { FrogRiverOne } from './routes/frog-river-one/FrogRiverOne';
import { PermCheck } from './routes/perm-check/PermCheck';
import { CentipedeGame } from './routes/centipede-game/CentipedeGame';
import { WordsFromInventory } from './routes/words-from-inventory/WordsFromInventory';
import { LeastCostMatrix } from './routes/least-cost-matrix/LeastCostMatrix';

export const UI = () => {
   const binaryGap = <BinaryGap/>;
   const centipedeGame = <CentipedeGame/>;
   const frogJmp = <FrogJmp/>;
   const frogRiverOne = <FrogRiverOne/>;
   const index = <Index/>;
   const leastCostMatrix = <LeastCostMatrix/>;
   const oddOccurrencesInArray = <OddOccurrencesInArray/>;
   const permCheck = <PermCheck/>;
   const permMissingElem = <PermMissingElem/>;
   const tapeEquilibrium = <TapeEquilibrium/>;
   const wordsFromInventory = <WordsFromInventory/>;

   return <>
      <div  style={{marginLeft: 50, marginTop: 50, width: 1000}}>
         <Routes>
            <Route
               element={binaryGap}
               path={'/binary-gap'}
            />
            <Route
               element={centipedeGame}
               path={'/centipede-game'}
            />
            <Route
               element={frogJmp}
               path={'/frog-jmp'}
            />
            <Route
               element={frogRiverOne}
               path={'/frog-river-one'}
            />
            <Route
               element={index}
               index={true}
               path={'/'}
            />
            <Route
               element={index}
               path={'*'}
            />
            <Route
               element={leastCostMatrix}
               path={'/least-cost-matrix'}
            />
            <Route
               element={oddOccurrencesInArray}
               path={'/odd-occurrences-in-array'}
            />
            <Route
               element={permCheck}
               path={'/perm-check'}
            />
            <Route
               element={permMissingElem}
               path={'/perm-missing-elem'}
            />
            <Route
               element={tapeEquilibrium}
               path={'/tape-equilibrium'}
            />
            <Route
               element={wordsFromInventory}
               path={'/words-from-inventory'}
            />
         </Routes>
      </div>
   </>
}