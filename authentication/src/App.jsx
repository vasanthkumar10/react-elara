import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Login } from "./components/Login";

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<h2>Home page</h2>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<h2>Register page</h2>} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <h2>Profile page</h2>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
