import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Layout = () => {
  const location = useLocation(); // Get the current location

  // Conditionally render the footer based on the current route path
  const renderHeader = () => {
    if (location.pathname !== '/feedback') {
      return <Header />;
    }
    return null;
  };
  // Conditionally render the footer based on the current route path
  const renderFooter = () => {
    if (location.pathname !== '/feedback') {
      return <Footer />;
    }
    return null;
  };

  return (
    <div>
      <>
            <div style={{ background: "var(--black)", overflow: "hidden" }}>
                {renderHeader()}
                {/* <Header /> */}
                {/* <FeedbackButton /> */}
                <Outlet />
                {/*To fetch the rest of the website children. E.g, The hero, residencies etc... */}
            </div>
            {/* <Footer/> */}
            {renderFooter()}
        </>
    </div>
  )
}

export default Layout