// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { NavLink, useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/home')
  };

  const forHoverChairs = (e) => {
    e.preventDefault();
    history.push('/chairs')
  }

  const forHoverCreate = (e) => {
    e.preventDefault();
    history.push('/create')
  }


  return (
    <div className="rightnav">
        <button type="button" className='button' onClick={forHoverChairs}> Book a chair </button>
        <button type="button" className='button' onClick={forHoverCreate}> Share your chair</button>
      <button className='chairbutt' onClick={openMenu}>
        <i className="fa-solid fa-chair"></i>
      </button>
   {showMenu && (
        <ul className="profile-dropdown">
          <ul>Welcome {user.username}!</ul>
          {/* <ul>{user.email}</ul> */}
          <ul>
            <button className='button'onClick={logout}>Log Out</button>
          </ul>
        </ul>
      )}


    </div>
  );
}

export default ProfileButton;
