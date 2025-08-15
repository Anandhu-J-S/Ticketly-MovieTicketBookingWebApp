
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './Router'
import ScrollToTop from './AutoScroll/ScrollToTop'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (

    <>
      <BrowserRouter>

          <ScrollToTop />
          <AppRoutes />
          <ToastContainer />

      </BrowserRouter>
    </>

  )
}

export default App
