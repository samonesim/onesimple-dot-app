export interface AppData {
    slug: string;
    name: string;
    description: string;
    icon: string;
    appStoreId: string; // e.g. "id123456789"
    screenshots: string[];
}

const PLACEHOLDER_ICON = '/images/placeholder-icon.svg';
const PLACEHOLDER_SCREEN = '/images/placeholder-screen.svg';
const icon = '/images/{slug}/icon.png';
const screenshot = '/images/{slug}/screenshot.png';
const screenshots = '/images/{slug}/{index}.webp';
export const APPS: AppData[] = [
    {
        slug: 'screentimer',
        name: 'ScreenTimer',
        description: 'Set timers for app usage to control screen time and stay productive.',
        icon: icon.replace('{slug}', 'screentimer'),
        appStoreId: 'id6747777738',
        screenshots: Array.from({ length: 5 }, (_, index) => screenshots.replace('{slug}', 'screentimer').replace('{index}', (index + 1).toString())),
    },
    {
        slug: 'profileshapes',
        name: 'ProfileShapes',
        description: 'Create shaped profile pictures for Twitter and other social media.',
        icon: icon.replace('{slug}', 'profileshapes'),
        appStoreId: 'id1607694041',
        screenshots: Array.from({ length: 5 }, (_, index) => screenshots.replace('{slug}', 'profileshapes').replace('{index}', (index + 1).toString())),
    },
    {
        slug: 'timer',
        name: 'Timer',
        description: 'Highly configurable timer for intervals, workouts, and more with alerts.',
        icon: icon.replace('{slug}', 'timer'),
        appStoreId: 'id1497262012',
        screenshots: Array.from({ length: 5 }, (_, index) => screenshots.replace('{slug}', 'timer').replace('{index}', (index + 1).toString())),
    },
    {
        slug: 'customnotch',
        name: 'Custom Notch',
        description: 'Customize or hide the notch on your iPhone with creative wallpapers.',
        icon: icon.replace('{slug}', 'customnotch'),
        appStoreId: 'id1313357241',
        screenshots: Array.from({ length: 5 }, (_, index) => screenshots.replace('{slug}', 'customnotch').replace('{index}', (index + 1).toString())),
    },
    {
        slug: 'wallax',
        name: 'Wallax',
        description: 'Wallpaper editor to resize and fit images perfectly without zooming.',
        icon: icon.replace('{slug}', 'wallax'),
        appStoreId: 'id722262021',
        screenshots: Array.from({ length: 5 }, (_, index) => screenshots.replace('{slug}', 'wallax').replace('{index}', (index + 1).toString())),
    }
];

export const SITE_TITLE = 'OneSimpleApp - Innovative iOS Apps';
export const SITE_DESCRIPTION = 'Discover our collection of useful and creative apps designed to enhance your iPhone experience.';