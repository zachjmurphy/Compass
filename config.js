//    ___                                    
//   / __\___  _ __ ___  _ __   __ _ ___ ___ 
//  / /  / _ \| '_ ` _ \| '_ \ / _` / __/ __|
// / /__| (_) | | | | | | |_) | (_| \__ \__ \
// \____/\___/|_| |_| |_| .__/ \__,_|___/___/
//                      |_|                  
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Zach J Murphy',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: 'Good Morning!',
  greetingAfternoon: 'Good Afternoon,',
  greetingEvening: 'Good Evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: 'ec827b444c0d4777e0e2761a39d7fd12',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C',
  weatherLatitude: '45.016350',
  weatherLongitude: '-75.647670',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://www.github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://www.outlook.com/',
    },
    {
      id: '3',
      name: 'Discord',
      icon: 'discord',
      link: 'https://discord.com/',
    },
    {
      id: '4',
      name: 'OneDrive',
      icon: 'onedrive',
      link: 'https://www.onedrive.com/',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'bookmark',
      link: 'https://www.reddit.com/',
    },
    {
      id: '6',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://www.youtube.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'music',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Inspirational',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      },
      {
        name: 'Classic',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      },
      {
        name: 'Oldies',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      },
      {
        name: 'Rock',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      },
    ],
    secondList: [
      {
        name: 'Linkedin',
        link: 'https://linkedin.com/',
      },
      {
        name: 'Figma',
        link: 'https://figma.com/',
      },
      {
        name: 'Dribbble',
        link: 'https://dribbble.com',
      },
      {
        name: 'Telegram',
        link: 'https://webk.telegram.org',
      },
    ],
  },
};
