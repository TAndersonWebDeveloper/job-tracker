//React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//React Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//UI
import AppLayout from "./ui/AppLayout";

//Pages
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import GlobalStyles from "./styles/GlobalStyles";
import NewJob from "./pages/NewJob";
import { Toaster } from "react-hot-toast";
import JobDetails from "./pages/JobDetails";
import { DarkModeProvider } from "./context/DarkModeContext";
import Signup from "./pages/Signup";
import ProtectedRoute from "./ui/ProtectedRoute";
import Login from "./pages/Login";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="jobs" element={<Jobs />}></Route>
              <Route path="new" element={<NewJob />} />
              <Route path="jobs/:jobId" element={<JobDetails />} />
            </Route>
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        <GlobalStyles />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
