import logo from './logo.svg';
import './App.css';
import { ConfigProvider } from 'antd';
import Layout from './components/layout/layout';
import Sigin from './pages/sigin/sigin';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './pages/Home/home';
import Books from './pages/books/Books';
import Authors from './pages/author/Authors';
import Shelves from './pages/shelves.jsx/shelves';
// import Provider from 'react-redux';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/Sigin",
        element: <Sigin />
      },
      {
        path: "/Books",
        element: <Books />
      },
      {
        path: "/Shelves",
        element: <Shelves />
      },
      {
        path: "/Authors",
        element: <Authors />
      },
    
      
    ]
  }
])
function App() {
  return (
    <ConfigProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ConfigProvider>
  );
}

export default App;
