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

export const UI = () => {
   return <>
      <div  style={{marginLeft: 50, marginTop: 50, width: 1000}}>
         <Routes>
            <Route
               element={<BinaryGap/>}
               path={'/binary-gap'}
            />
            <Route
               element={<CentipedeGame/>}
               path={'/centipede-game'}
            />
            <Route
               element={<FrogJmp/>}
               path={'/frog-jmp'}
            />
            <Route
               element={<FrogRiverOne/>}
               path={'/frog-river-one'}
            />
            <Route
               element={<Index/>}
               index={true}
               path={'/'}
            />
            <Route
               element={<Index/>}
               path={'*'}
            />
            <Route
               element={<OddOccurrencesInArray/>}
               path={'/odd-occurrences-in-array'}
            />
            <Route
               element={<PermCheck/>}
               path={'/perm-check'}
            />
            <Route
               element={<PermMissingElem/>}
               path={'/perm-missing-elem'}
            />
            <Route
               element={<TapeEquilibrium/>}
               path={'/tape-equilibrium'}
            />
            <Route
               element={<WordsFromInventory/>}
               path={'/words-from-inventory'}
            />
         </Routes>
      </div>
   </>
}