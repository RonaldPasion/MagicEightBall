const userName = 'Bob';

userName ? console.log(`Hello, ${userName}!`): console.log('Hello!');

const userQuestion = 'Is it going to rain today?';

userName ? console.log(`${userName} asked, ${userQuestion}`): console.log(`You asked, ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
