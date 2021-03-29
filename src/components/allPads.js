import {
  clap,
  crash,
  kickH,
  laser,
  punch,
  shaker,
  snareB,
  tick,
  tom,
} from './audioImports';

const allPads = [
  {
    name: 'Q',
    key: '',
    audio: clap,
    id: 'Clap',
    code: 'KeyQ',
  },
  {
    name: 'W',
    key: '',
    audio: crash,
    id: 'Crash',
    code: 'KeyW',
  },
  {
    name: 'E',
    key: '',
    audio: kickH,
    id: 'Kick',
    code: 'KeyE',
  },
  {
    name: 'A',
    key: '',
    audio: shaker,
    id: 'Shaker',
    code: 'KeyA',
  },
  {
    name: 'S',
    key: '',
    audio: snareB,
    id: 'Snare',
    code: 'KeyS',
  },
  {
    name: 'D',
    key: '',
    audio: tom,
    id: 'Tom',
    code: 'KeyD',
  },
  {
    name: 'Z',
    key: '',
    audio: laser,
    id: 'Laser',
    code: 'KeyZ',
  },
  {
    name: 'X',
    key: '',
    audio: punch,
    id: 'Punch',
    code: 'KeyX',
  },
  {
    name: 'C',
    key: '',
    audio: tick,
    id: 'Tick',
    code: 'KeyC',
  },
];

export default allPads;
