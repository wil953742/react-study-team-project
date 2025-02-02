import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import CampingDetailPage from './pages/CampingDetailPage/CampingDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/campings">
          <Route path=":contentId" element={<CampingDetailPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
