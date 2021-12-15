import React from 'react'

const materialRoutes = [
    {
        path: '/material/buttons',
        component: React.lazy(() => import('./buttons/AppButton')),
    },

    {
        path: '/material/checkbox',
        component: React.lazy(() => import('./checkbox/AppCheckbox')),
    },
    {
        path: '/material/flights',
        component: React.lazy(() => import('./flights/FlightTab')),
    },
    
    {
        path: '/material/autocomplete',
        component: React.lazy(() => import('./auto-complete/AppAutoComplete')),
    }
  
]

export default materialRoutes
