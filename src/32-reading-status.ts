export {};
interface book{
title:string;
author:string;
isRead:boolean;
}

const library:book[] = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    isRead: true
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false
  }
];

const showStatus = (library:book[]) => {
  for (let i = 0; i < library.length; i++) {
    const writer = library[i];
  if(writer.isRead){
    console.log(` Already read ${writer.title} by ${writer.author}`);
  } else console.log(`You still need to read ${writer.title} by ${writer.author}`);
};
}
showStatus(library);

/*
  Expected output:

  Already read 'Bill Gates' by The Road Ahead.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/
