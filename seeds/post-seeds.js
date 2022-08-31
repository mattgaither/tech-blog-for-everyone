const { Post } = require('../models');

const postdata = [
  {
    title: 'Tesla is releasing a phone to compete with Apple!',
    text: 'They plan on releasing a phone next year and promised to be more affordable thanthe Iphone with moreand better features.',
    user_id: 3
  },
  {
    title: "Thermal cameras are coming to the new Galaxy S24 phones!",
    text: "I do not know what we would do with this camera but it will be cool to play with.",
    user_id: 2
  },
  {
    title: 'Thor promises to charge all electronic devices so they never go dead!',
    text: 'I saw this in the news when the blip happened and that is why he is the strongest Avenger!',
    user_id: 6
  },
  {
    title: 'What are your thoughts On cybersecurity?',
    text: 'I have a hobby of hacking websites and I find most people use the same password over and over again.',
    user_id: 7
  },
  {
    title: 'Has anyone noticed blinking stars in the sky?',
    text: 'I am not sure what they are. I was guessing they might be planes.',
    user_id: 9
  },
  {
    title: 'We should destory all technology and go back to pen and paper!',
    text: 'Technology has almost destroyed our world. Everyone is staring at their phones and computers instead of living life to the fullest.',
    user_id: 5
  }
];

const seedPosts = () => Post.bulkCreate(postdata);
module.exports = seedPosts;