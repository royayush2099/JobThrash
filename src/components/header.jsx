import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from './ui/button'
import { SignInButton,SignedOut,SignedIn,UserButton, SignIn, useUser } from '@clerk/clerk-react'
import { Briefcase, BriefcaseBusiness, Heart, PenBox } from 'lucide-react'

const Header = () => {
 const [showSingIn,setShowSignIn] =useState(false);
 const [search,setSearch] = useSearchParams();
 const {user} = useUser();

 useEffect(()=>{
  if(search.get(`sign-in`)){
    setShowSignIn(true) ;  /*this is used for whenever a use tries the route or give search  parameter sign-in a login pop up*/
}
 },[search] )
 const handleOverlayClick=(e)=>{           /**this fucntion is created when we click on overlay of login it will disaapear */
  if(e.target === e.currentTarget){     
    setShowSignIn(false);
    setSearch({});
  }
 }
  return (
    <>
    <nav className='py-4 flex justify-between items-center'>
        <Link>
        <img src='/logo.png' className='h-20'/>
        </Link>
    <div className='flex gap-8'>
        <SignedOut>
        <Button variant="outline" onClick={()=>setShowSignIn(true)}>Login</Button>
      </SignedOut>
     
      <SignedIn>
        {/*add a condietion here */
        user?.unsafeMetadata?.role === "recruiter" && (
        <Link to="/post-job">
        
     
        <Button variant='destructive' className='rounded-full'>
        <PenBox size={20} className='mr-2'/>
          Post a Job
           </Button>
        </Link>)}
      
        <UserButton appearance={{
          elements:{
            avatarBox:'w-10 h-10'
          }
        }}>
       <UserButton.MenuItems> 
        <UserButton.Link
        label='My Jobs'
        labelIcon={<BriefcaseBusiness size={15}/>}
        href='/myjobs'
        />
             <UserButton.Link
        label='Saved Jobs'
        labelIcon={<Heart size={15}/>}
        href='/savedjobs'
        />
       </UserButton.MenuItems>
        </UserButton>
      </SignedIn>
      </div>
    </nav>

{showSingIn && <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
onClick={handleOverlayClick}>
  <SignIn
  signUpForceRedirectUrl='/onboarding'
  fallbackRedirectUrl='/onboarding'/* this is checkinghere for condintion or giving  we used cleark   */
  />
  </div>}
      
    </>
  )
}

export default Header
