import { Route, Routes } from 'react-router-dom';
import pages from './utils/pages';
import Layout from './Layout';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import ConfirmedBooking from './pages/Bookings/ConfirmedBooking';
import NotFound from './pages/NotFound';
import Menu from './pages/Menu';
import About from './pages/About';
import Login from './pages/Login';
import UnderConstruction from './pages/UnderConstruction';
import MyPage from './pages/MyPage';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={pages.get('home').path} element={<Home />} />
          <Route path={pages.get('about').path} element={<About />} />
          <Route path={pages.get('menu').path} element={<Menu />} />
          <Route path={pages.get('bookings').path} element={<Bookings />} />
          <Route
            path={pages.get('confirmedBooking').path}
            element={<ConfirmedBooking />}
          />
          <Route
            path={pages.get('orderOnline').path}
            element={<UnderConstruction />}
          />
          <Route path={pages.get('login').path} element={<Login />} />
          <Route path={pages.get('myPage').path} element={<MyPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
