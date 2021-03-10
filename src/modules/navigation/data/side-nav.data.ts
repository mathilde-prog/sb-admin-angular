import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'MENU',
        items: ['accueil', 'spotify', 'lyrics', 'infos', 'concert', 'aPropos'],
    },
];

export const sideNavItems: SideNavItems = {
    accueil: {
        icon: 'home',
        text: 'Accueil',
        link: '/dashboard',
    },
    spotify: {
        icon: 'spotify', // Ne marche pas pour le moment 
        text: 'Spotify',
        link: '/dashboard',
    },
    lyrics: {
      icon: 'music',
      text: 'Lyrics',
      link: '/charts',
    },
    infos: {
        icon: 'info-circle',
        text: 'Infos',
        link: '/dashboard',
    },
    concert: {
      icon: 'calendar-alt',
      text: 'Concert',
      link: '/charts',
    },
    aPropos: {
        icon: 'thumbtack',
        text: 'A propos',
        link: '/dashboard',
    },
};
