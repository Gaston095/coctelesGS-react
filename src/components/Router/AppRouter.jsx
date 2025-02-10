import { Route, Routes } from 'react-router-dom';
import Homepage from '../Homepage';

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}
