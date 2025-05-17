// src/hooks/useAuth.js
import { useState, useEffect } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load user from localStorage or API
    const token = localStorage.getItem('token');
    if (token) {
      // TODO: validate token and fetch user
      setUser({ name: 'Demo User' });
    }
  }, []);

  return { user, setUser };
}
