function shakeMagicEightball(userName, userQuestion)
{
  const eightBallOutput = [
  'it is certain.',
  'it is decidedly so.',
  'reply hazy try again.',
  'cannot predict now.',
  'do not count on it.',
  'my sources say no.',
  'outlook not so good.',
  'signs point to yes.'
  ];
  const randomIndex = Math.floor(Math.random() * 8);

  console.log(`Hello ${userName}. You asked, ${userQuestion.toLowerCase()}`);
  console.log(`Magic eight ball says ${eightBallOutput[randomIndex]}`);
}

shakeMagicEightball('Bob', 'Will it rain today?');
