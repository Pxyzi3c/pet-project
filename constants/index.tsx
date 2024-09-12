import React from 'react';

import { 
    House,
} from 'lucide-react';

export const sidebarLinks = [
    {
        label: 'Home',
        route: '/forum',
        icon: <House size={20}/>,
    },
    {
        label: 'Communities',
        route: '/forum/communities',
        icon: <House size={20}/>,
    },
]