const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Man Tesla can not compete with Apple but is has to be better than Android!',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Man all the Android devicesare going to put both Apples and Tesla out of business.',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'Great another useless feature on a device that is not user friendly.',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'Thor is not the strogest Avenger! The Hulf is the strongest! Please check your facts before you make a post.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'The Hulk is a overgrown green man who does not have any real powers. ',
    user_id: 6,
    post_id: 3
  },
  {
    comment_text: 'I can defeat all the Avengers and rule the world in which they live!',
    user_id: 4,
    post_id: 3
  },
  {
    comment_text: 'I am in high school and have a different password for every account I have. I use a random password generator to come up with them.',
    user_id: 10,
    post_id: 4
  },
  {
    comment_text: 'What is cybersecurity? I have not used technology before and this is my frist time on a website.',
    user_id: 8,
    post_id: 4
  },
  {
    comment_text: '@EP I can probably guess your password. Cybersecurity is to ensue the users and developers/companies information does not get into the wrong hands.',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'Tesla is going to be the newest and best phone producer.',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'This feature will be dumd and useless.',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'We need technology to have advances in society. I do agree that we need to be more attentive and mature with technology but, destroying all of it is not the answer.',
    user_id: 9,
    post_id: 5
  },
  {
    comment_text: '@Hulk I will be happy to help you destory everything! I will get started right now.',
    user_id: 4,
    post_id: 5
  },
  {
    comment_text: 'I have! Some of the light blick and move at a slow rate of speed. I am not sure what these are.',
    user_id: 10,
    post_id: 4
  },
  {
    comment_text: 'It was not me this time.',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'Those are Star-link satalites that were launch not to long ago. Some people even say the light move in a line just like a train.',
    user_id: 3,
    post_id: 4
  },
  {
    comment_text: '@Juggernaut No wait! Do not break any thing.',
    user_id: 6,
    post_id: 5
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;