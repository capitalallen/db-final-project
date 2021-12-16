import { authRoles } from './auth/authRoles'

export const navigations = [
    {
        name: 'Book',
        path: '/dashboard',
        icon: 'dashboard',
    },
    // {
    //     name: 'Session/Auth',
    //     icon: 'security',
    //     children: [
    //         {
    //             name: 'Sign in',
    //             iconText: 'SI',
    //             path: '/session/signin',
    //         },
    //         {
    //             name: 'Sign up',
    //             iconText: 'SU',
    //             path: '/session/signup',
    //         },
    //         {
    //             name: 'Forgot Password',
    //             iconText: 'FP',
    //             path: '/session/forgot-password',
    //         },
    //         {
    //             name: 'Error',
    //             iconText: '404',
    //             path: '/session/404',
    //         },
    //     ],
    // },
    {
        name: 'Statistics',
        icon: 'favorite',
        badge: { value: '30+', color: 'secondary' },
        children: [
            // {
            //     name: 'Account',
            //     path: '/material/autocomplete',
            //     iconText: 'A',
            // },
            {
                name: 'Orders',
                path: '/material/buttons',
                iconText: 'B',
            }
        ],
    }
]
