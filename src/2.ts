function getRandomTsCode(): string {
  // Generate a random number between 1 and 10
  const randNum = Math.floor(Math.random() * 10) + 1;

  // Use the random number to generate a random sentence
  let randSentence: string;
  switch (randNum) {
    case 1:
      randSentence = "The quick brown fox jumps over the lazy dog.";
      break;
    case 2:
      randSentence = "Pack my box with five dozen liquor jugs.";
      break;
    case 3:
      randSentence = "How much wood could a woodchuck chuck if a woodchuck could chuck wood?";
      break;
    case 4:
      randSentence = "The five boxing wizards jumped over the seven lazy dogs.";
      break;
    case 5:
      randSentence = "How much wood could a woodchuck chuck if a woodchuck could chuck wood?";
      break;
    case 6:
      randSentence = "The six sheep's seven dogs smell the seven cows' three chickens.";
      break;
    case 7:
      randSentence = "The eight miles of string are three feet long.";
      break;
    case 8:
      randSentence = "A dozen eggs cost nine cents.";
      break;
    case 9:
      randSentence = "Five apples a day keep the doctor away.";
      break;
    case 10:
      randSentence = "Seven up, seven down, seven topsy-turvy.";
      break;
    default:
      randSentence = "";
  }

  return randSentence;
}
