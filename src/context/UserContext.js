import React, {useState, useEffect, createContext} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleSignOut = async () => {
    try {
      const isSignedIn = await GoogleSignin.isSignedIn();
      if (isSignedIn) {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
      }
      setCurrentUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const checkIsUserLoggedIn = async () => {
      const isSignedIn = await GoogleSignin.isSignedIn();
      if (isSignedIn) {
        const googleInfo = await GoogleSignin.signInSilently();
        setCurrentUser(googleInfo.user);
      }
    };

    checkIsUserLoggedIn();
  }, []);

  console.log('usercontext', currentUser);

  return (
    <UserContext.Provider value={{currentUser, setCurrentUser, handleSignOut}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
