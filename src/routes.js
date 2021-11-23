import React from 'react'
import TSClossure from './Pages/TripsheetClossure/TSClossure'
import TSClossureSto from './Pages/TripsheetClossure/TSClossureSto'
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/TSClossure', exact: true, name: 'Test', component: TSClossure },
  { path: '/TSClossure-sto', exact: true, name: 'Test', component: TSClossureSto },
]

export default routes
