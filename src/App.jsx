//React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//UI
import AppLayout from "./ui/AppLayout";

//Pages
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import GlobalStyles from "./styles/GlobalStyles";
import NewJob from "./pages/NewJob";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="jobs/new" element={<NewJob />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </QueryClientProvider>
  );
}

export default App;
