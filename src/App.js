import React, {Suspense} from 'react';
import { Toaster } from "react-hot-toast";
// import 'assets/styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from 'components/Loading'
import 'styles/App.css';
const Dashboard = React.lazy(() => import('pages/Dashboard'))

function App() {
  return (
    <div className="App">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          // Define default options
          className: "topZIndex",
          duration: 2000,
          style: {
            background: "#fff",
            color: "black",
            fontWeight: "Bold",
          },

          // Default options for specific types
          success: {
            duration: 3000,
          },
        }}
      />
      <Suspense fallback={<Loading />}>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
