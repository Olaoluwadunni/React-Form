import { routes } from '.';
import VerifyRegistration from '../pages/VerifyRegistration'
import Home from '../pages/Home'

export const publicRoutes = [
    {
        'component': Home,
        'link': routes.home
    },
    {
        'component': VerifyRegistration,
        'link': routes.verifyRegistration
    }
]
