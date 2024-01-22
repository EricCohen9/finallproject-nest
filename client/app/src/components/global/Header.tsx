
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
const HeaderComponent = styled.header`
  display: flex;
  position: sticky;
  top: 0; 
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #c4bebe;
  padding: 1rem;
  width: 100%; 
  box-sizing: border-box;
`;
const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
`;

const UserButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: #2196f3;
  border: none;
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #1565c0;
  }
`;
const LogoLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  padding-right:1rem;
  text-decoration: none; 
  cursor: pointer;
  color: #fff; 
`;

const ActionButtons = styled.div`
  display: flex;
`;

const ActionButton = styled.button`
  background-color: #2196f3;
  color: #beb1b1;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1565c0;
  }
`;
const ScrollButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #2196f3;
  color: #bbadad;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1565c0;
  }
`;
const Header = () => {
  const [showUserSettings, setShowUserSettings] = useState(false);
  const location = useLocation();
  const [searchInput, setSearchInput] = useState('');
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const handleUserSettingsClick = () => {
    setShowUserSettings(!showUserSettings);
  };
const handleSearchInputChange = (event:any) => {
  setSearchInput(event.target.value);
};
  const isHomePage = location.pathname === '/home' || location.pathname === '/buy' || location.pathname.startsWith('/card/');
    return (
    <HeaderComponent>
    <LogoLink to="/"  >
        Stocks
      </LogoLink>
      {isHomePage && (
        <div>
        <ScrollButton onClick={handleScrollToTop}>
      Scroll Up
    </ScrollButton>
          <SearchBarWrapper>
            <SearchInput
              type="text"
              placeholder="Search..."
              value={searchInput}
              onChange={handleSearchInputChange}
            />
            <UserButton onClick={handleUserSettingsClick}>
              <img
                src='https://png.pngtree.com/png-clipart/20191121/original/pngtree-user-icon-png-image_5097430.jpg'
                alt='User Icon'
                style={{ width: '18px', height: '18px', marginRight: '8px' }}
              />
              User Settings
            </UserButton>
          </SearchBarWrapper>

          {showUserSettings && (
            <div style={{
              position:'-moz-initial',
              top: '70px',
              right: '10px',
              backgroundColor: '#fff',
              padding: '10px',
              border: '1px solid #ccc',
              zIndex: 10000, 
            }}>
              <div>
                <button style={{ display: 'block', marginBottom: '8px' }}>User Settings Content Line 1</button>
                <button style={{ display: 'block' }}>User Settings Content Line 2</button>
              </div>
            </div>
          )}
        </div>
      )}
      {!isHomePage && (
        <ActionButtons>
          <Link to="/login">
            <ActionButton>Login</ActionButton>
          </Link>
          <Link to="/register">
            <ActionButton>Register</ActionButton>
          </Link>
        </ActionButtons>
      )}
    </HeaderComponent>
  );
};


export default Header;
