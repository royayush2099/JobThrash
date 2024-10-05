
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layout/app-layout'
import { Button } from './components/ui/button'
import LandingPage from './pages/landing'
import Onboarding from './pages/onboarding'
import JobListings from './pages/job-listings'
import Job from './pages/job'
import MyJobs from './pages/my-jobs'
import Postjob from './pages/post-job'
import Savedjob from './pages/saved-job'
import { ThemeProvider } from './components/ui/theme-provider'
import ProtectedRoute from './components/protected-route'

 const router = createBrowserRouter([
  {
    element : <AppLayout/>,
    children:[
      {
        path:'/',
        element:<LandingPage />
      },
      {
        path:'/onboarding',
        element:<ProtectedRoute><Onboarding/></ProtectedRoute>
      },
      {   
        path:'/jobs',
        element:<ProtectedRoute><JobListings/> </ProtectedRoute>
      },
      {
        path:'/job/:id',
        element:<ProtectedRoute><Job/> </ProtectedRoute>
      },
      {
        path:'/myjobs',
        element: <ProtectedRoute><MyJobs/></ProtectedRoute>
      },
      {
        path:'/post-job',
        element: <ProtectedRoute><Postjob/></ProtectedRoute>
      },
      {
        path:'/savedjobs',
        element:<ProtectedRoute><Savedjob/> </ProtectedRoute>
      },

    ]
  }
 ])
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router}/>
    </ThemeProvider>
  

  
  )
}
  
export default App
