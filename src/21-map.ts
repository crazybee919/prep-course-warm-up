export {};

function tidyUpString(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
function capitalise(str: string): string {
  const firstLetter =str[0];
  const firstLetterToCapital = firstLetter.toUpperCase();
  const restWord = str.substring(1);
  return firstLetterToCapital + restWord;
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
const mentorsTidy = mentors.map((mentor) => {
  const tidy = tidyUpString(mentor);
  const capital = capitalise(tidy);
  return capital;
});

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
