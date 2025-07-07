
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './Router'
import ScrollToTop from './AutoScroll/ScrollToTop'

function App() {
  return (

    <>
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </>

  )
}

export default App
