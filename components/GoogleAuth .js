import React, { useState } from "react";
import { auth, provider, signInWithPopup, signOut } from "./firebase_config"; 

const GoogleAuth = () => {
  const [user, setUser] = useState(null);

  // Handle Google Sign-In
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error during sign-in:", error.message);
    }
  };

  // Handle Google Sign-Out
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Clear the user data after logout
    } catch (error) {
      console.error("Error during sign-out:", error.message);
    }
  };

  return (
    <div>
      <h1>Google Authentication</h1>
      {user ? (
        <div>
          <h3>Welcome, {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="profile" />
          <button onClick={handleLogout}>Sign out</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Sign in with Google</button>
      )}
    </div>
  );
};

export default GoogleAuth;
