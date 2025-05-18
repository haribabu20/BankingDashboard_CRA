import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;


// This is the main entry point of the application. It wraps the AppRoutes component with the AuthProvider to provide authentication context to the entire app.

// The AuthProvider component is responsible for managing authentication state and providing it to the rest of the application.
// The AppRoutes component contains the routing logic for the application, allowing users to navigate between different pages and components.