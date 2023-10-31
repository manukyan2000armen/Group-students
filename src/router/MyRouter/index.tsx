import React from 'react'
import { useRoutes } from 'react-router-dom'
import AddGroup from '../../page/AddGroup'
import Groups from '../../page/Groups'


function MyRouter() {
  const routes = useRoutes([
    
    {
        path:'/add-group',
        element:<AddGroup/>
    },
    {
        path:'/',
        element:<Groups/>
    }
  ])
  return routes
}

export default MyRouter