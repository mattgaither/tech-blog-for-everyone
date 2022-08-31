const { User } = require('../models');

const userdata = [
  {
    id: 1,
    username: 'AppleFanBoy',
    email: 'professorMac@apple.com',
    password: 'password123'
  },
  {
    id: 2,
    username: 'AndroidMan',
    email: 'galaxy@aol.com',
    password: 'password123'
  },
  {
    id: 3,
    username: 'MElon',
    email: 'musk.elon@tesla.net',
    password: 'password123'
  },
  {
    id: 4,
    username: 'Juggernaut',
    email: 'jug@marvel.com',
    password: 'password123'
  },
  {
    id: 5,
    username: 'Hulk Incredible',
    email: 'thestrongestavenger@marvel.com',
    password: 'password123'
  },
  {
    id: 6,
    username: 'Not The Storgest Avenger',
    email: 'hemsworth.chris@marvel.com',
    password: 'password123'
  },
  {
    id: 7,
    username: 'Trickster',
    email: 'loki@marvel.com',
    password: 'password123'
  },
  {
    id: 8,
    username: 'EP King of Rock',
    email: 'elvis@rca-records.com',
    password: 'password123'
  },
  {
    id: 9,
    username: 'Not The Green Lantern',
    email: 'ryan@marvel.com',
    password: 'password123'
  },
  {
    id: 10,
    username: 'SpiderTom',
    email: 'Holland@marvel.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;