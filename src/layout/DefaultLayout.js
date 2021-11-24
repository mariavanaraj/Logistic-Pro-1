import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

import nav from "../_nav";

const DefaultLayout = () => {

  // document.title=nav.name;

  // const route = useRoute();
  // console.log(route.name);

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader name={nav.name}/>
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
