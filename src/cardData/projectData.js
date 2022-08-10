export default function getProjectData() {

    let projectData = [
        {
            name: 'Hivebase',
            description: 'SaaS for large scale apiculture applications',
            img: require('../img/projects/hivebase.png'),
            links: [{ name: 'Link', link: 'https://hivebase.net' }]
        },
        {
            name: 'Robota',
            description: 'Open-source crypto trading bot',
            img: require('../img/projects/robota.png'),
            links: [{ name: 'Demo', link: 'https://robota-bitmex-bot.herokuapp.com/console' }, { name: 'Github', link: 'https://github.com/sashalex007/robota-bitmex-trading-bot' }]
        },
        {
            name: 'Crypto analysis',
            description: 'Strategy backtesting simulator and historical data downloader',
            img: require('../img/projects/crypto.png'),
            links: [{ name: 'Github 1', link: 'https://github.com/sashalex007/Backtesting-simulator' }, { name: 'Github 2', link: 'https://github.com/sashalex007/bitmex-historical-data-downloader' }]
        },
        {
            name: 'Textract-Wave ',
            description: 'Textract-waveapp integration for automated invoice creation from standardized purchase orders',
            img: require('../img/projects/textract.gif'),
            links: [{ name: 'Github', link: 'https://github.com/sashalex007/Textract-Wave-Invoicing-Server' }]
        },
        {
            name: 'nRF51',
            description: 'Firmware and mobile app for nRF51and mpu6050 utilization in high performance applications',
            img: require('../img/projects/nrf51.png'),
            links: [{ name: 'Github 1', link: 'https://github.com/sashalex007/nrf51_mbedOS_MPU6050' }, { name: 'Github 2', link: 'https://github.com/sashalex007/nrf51_MPU6050_calibrate' }, { name: 'Github 3', link: 'https://github.com/sashalex007/nrf51_android_app' }]
        },
        {
            name: 'SpeedDrive',
            description: 'The most popular direct drive conversion for the ender3 3d-printing platform',
            img: require('../img/projects/speeddrive.png'),
            links: [{ name: 'Thingiverse', link: 'https://www.thingiverse.com/thing:3816051' }, { name: 'Github', link: 'https://github.com/sashalex007/speedDrive' }]
        },
        {
            name: 'This website!',
            description: 'My React + MUI portfolio website! Features dynamic cards and buttons',
            img: require('../img/projects/thiswebsite.png'),
            links: [{ name: 'Github', link: 'https://github.com/sashalex007/my-profile' }]
        }
    ]

    return projectData
}