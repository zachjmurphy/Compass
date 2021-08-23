//    ___                                    
//   / __\___  _ __ ___  _ __   __ _ ___ ___ 
//  / /  / _ \| '_ ` _ \| '_ \ / _` / __/ __|
// / /__| (_) | | | | | | |_) | (_| \__ \__ \
// \____/\___/|_| |_| |_| .__/ \__,_|___/___/
//                      |_|                  
//
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
      name: 'GitHub',
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
      icon: 'message-square',
      link: 'https://www.discord.com/',
    },
    {
      id: '4',
      name: 'OneDrive',
      icon: 'archive',
      link: 'https://www.onedrive.com/',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'at-sign',
      link: 'https://www.reddit.com/',
    },
    {
      id: '6',
      name: 'Youtube',
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
        name: 'Spotify',
        link: 'https://www.spotify.com/',
      },
      {
        name: 'Deezer',
        link: 'https://www.deezer.com/',
      },
      {
        name: 'Soundcloud',
        link: 'https://www.soundcloud.com/',
      },
      {
        name: 'YouTube Music',
        link: 'https://music.youtube.com/',
      },
    ],
    secondList: [
      {
        name: 'Photopea',
        link: 'https://www.photopea.com/',
      },
      {
        name: 'Figma',
        link: 'https://www.figma.com/',
      },
      {
        name: 'Google',
        link: 'https://www.google.ca/',
      },
      {
        name: 'DeviantArt',
        link: 'https://www.deviantart.com/',
      },
    ],
  },
};
