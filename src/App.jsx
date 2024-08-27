
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
        element:<Onboarding/>
      },
      {
        path:'/jobs',
        element:<JobListings/>
      },
      {
        path:'/job/:id',
        element:<Job/>
      },
      {
        path:'/myjobs',
        element:<MyJobs/>
      },
      {
        path:'/postjob',
        element:<Postjob/>
      },
      {
        path:'/savedjobs',
        element:<Savedjob/>
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
