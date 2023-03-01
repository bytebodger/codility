import { Routes, Route } from 'react-router-dom';
import { Index } from './routes/index/Index';
import { BinaryGap } from './routes/binary-gap/BinaryGap';
import { OddOccurrencesInArray } from './routes/odd-occurrences-in-array/OddOccurrencesInArray';
import { FrogJmp } from './routes/frog-jmp/FrogJmp';
import { PermMissingElem } from './routes/perm-missing-elem/PermMissingElem';

export const UI = () => {
   return <>
      <div  style={{marginLeft: 50, marginTop: 50, width: 1000}}>
         <Routes>
            <Route
               element={<BinaryGap/>}
               path={'/binary-gap'}
            />
            <Route
               element={<FrogJmp/>}
               path={'/frog-jmp'}
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
               element={<PermMissingElem/>}
               path={'/perm-missing-elem'}
            />
         </Routes>
      </div>
   </>
}