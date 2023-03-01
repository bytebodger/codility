import { Routes, Route } from 'react-router-dom';
import { Index } from './routes/index/Index';
import { BinaryGap } from './routes/binaryGap/BinaryGap';

export const UI = () => {
   return <>
      <div  style={{marginLeft: 50, marginTop: 50, width: 1000}}>
         <Routes>
            <Route
               element={<BinaryGap/>}
               path={'/binary-gap'}
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
         </Routes>
      </div>
   </>
}