export const PLACEHOLDER_HERO_VIDEO =
  'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';

export const PLACEHOLDER_HERO_POSTER = 'https://picsum.photos/1920/1080?random=1';

export const img = (n, w = 800, h = 600) => `https://picsum.photos/${w}/${h}?random=${n}`;

export const FEATURED_SHOWS = [
  { id: 1, title: 'Street Legends', genre: 'Racing', poster: '/img1.png' },
  { id: 2, title: 'Garage Builds', genre: 'Automotive', poster: '/img2.png' },
  { id: 3, title: 'Track Day Diaries', genre: 'Racing', poster: '/img3.png' },
  { id: 4, title: 'Horsepower Nation', genre: 'Automotive', poster: '/img4.png' },
  { id: 5, title: 'Drift Kings', genre: 'Racing', poster: '/img5.png' },
  { id: 6, title: 'Custom Culture', genre: 'Automotive', poster: '/img6.png' },
];

export const PROJECT_TYPES = ['Commercial', 'Racing Content', 'Documentary', 'Brand Partnership', 'Other'];
