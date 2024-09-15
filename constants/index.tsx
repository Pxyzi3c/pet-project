import React from 'react';

import { 
    House,
    Users,
    ScrollText,
    PartyPopper,
    MessageCircleQuestion,
    MessagesSquare
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
        icon: <Users size={20}/>,
    },
]

export const categoriesList = [
    {
        id: 1,
        label: 'General',
        icon: <MessagesSquare size={20}/>,
    },
    {
        id: 2,
        label: 'Discussion',
        icon: <ScrollText size={20}/>,
    },
    {
        id: 3,
        label: 'Celebration',
        icon: <PartyPopper size={20}/>,
    },
    {
        id: 4,
        label: 'Question',
        icon: <MessageCircleQuestion size={20}/>,
    },
]