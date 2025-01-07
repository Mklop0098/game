import { publicRoutes } from "./components/router";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function App() {
  return (

    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Page />
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  )
}