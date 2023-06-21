
export default function getHobbyData() {

    const hobbiesData = [
        {
            name: '3d printing',
            description: 'Lead developer of the SpeedDrive project, the most popular direct drive conversion for the ender3 platform. The SpeedDrive project has blossomed into a vibrant community of dedicated designers and engineers who work on porting the design to other printers and improving the design.',
            img: require('../img/hobbies/printing.png'),
            links: [{ name: 'Thingiverse profile', link: 'https://www.thingiverse.com/sashalex007/designs' }]
        },
        {
            name: 'Alpine skiing',
            description: 'Love improving in this sport and helping others along the way! Check out my YouTube channel where I document my progress. I also run a discord server for the community to share their progress and help each other out. This passion eventually led me to launch Winter Instruments- a small business specializing in the design and manufacture of specialized ski tools and equipment.',
            img: require('../img/hobbies/ski.jpeg'),
            links: [{ name: 'youtube', link: 'https://www.youtube.com/c/nSkier' }, { name: 'Discord', link: 'http://technicalski.com' }, { name: 'Winter Instruments', link: 'https://winterinstruments.shop' }]
        },
        {
            name: 'Tennis',
            description: `I'm bad at tennis but I love it. I make stuff...so I made alot of custom tennis racquet components.`,
            img: require('../img/hobbies/tennis.png'),
            links: [{ name: 'Github', link: 'https://github.com/sashalex007/tennis-racquet-custom-pallets' }]
        },
    ]

    return hobbiesData
}