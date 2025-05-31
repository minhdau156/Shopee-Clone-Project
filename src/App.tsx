import useRouteElements from './useRouteElements'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useContext } from 'react'
import { LocalStorageEventTarget } from './utils/auth'
import { AppContext, AppProvider } from './contexts/app.context'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ErrorBoundary from './components/ErrorBoundary'
import { HelmetProvider } from 'react-helmet-async'
import { Query, QueryClientProvider } from '@tanstack/react-query'
import { R } from '@tanstack/react-query-devtools/build/legacy/ReactQueryDevtools-Cn7cKi7o'
import { queryClient } from './main'



function App() {
  const routeElements = useRouteElements()
  const { reset } = useContext(AppContext)
  useEffect(() => {
    LocalStorageEventTarget.addEventListener('clearLS', reset)
    return () => {
      LocalStorageEventTarget.removeEventListener('clearLS', reset)
    }
  }, [reset])
  
  return (
    <HelmetProvider>
      <ErrorBoundary>
        {routeElements}
        <ToastContainer />
      </ErrorBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </HelmetProvider>
    
    
  )
  
}

export default App
