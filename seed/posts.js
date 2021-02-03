const db = require("../db/connection");
const Post = require("../models/post");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const posts = [
    {
      title: "Hot Take: Where the Wild Things Are, absolute banger of a book",
      imgURL:
        "https://render.fineartamerica.com/images/rendered/medium/greeting-card/images-medium-5/where-the-wild-shadows-roam-jessie-gould.jpg",
      content:
        "This story of 338 words focuses on a young boy named Max who, after dressing in his wolf costume, wreaks such havoc through his household that he is sent to bed without his supper. Max's bedroom undergoes a mysterious transformation into a jungle environment, and he winds up sailing to an island inhabited by frightening beasts, the Wild Things. After successfully intimidating the creatures, Max is hailed as the king of the Wild Things and enjoys a playful romp with his subjects. However, he starts to feel lonely and decides to return home, to the Wild Things' dismay. Upon returning to his bedroom, Max discovers a hot supper waiting for him.",
      author: "Wild Thing",
    },
    {
      title: "How to be cool",
      imgURL: "https://rilaly.files.wordpress.com/2013/03/cool-person.jpg",
      content: "3 words: Puff, Puff, Pass",
      author: "Riff Raff",
    },
    {
      title: "Superbowl 55: Old Head Goat versus young GOAT",
      imgURL:
        "https://images.daznservices.com/di/library/sporting_news/c7/42/brady-mahomes-super-bowl-012521-ftrjpg_ltobo2b969ql1556gphasdiac.jpg?t=1050660311&quality=100",
      content:
        "Both KC and Tampa Bay tend to prefer the running back by committee approach this year and it will be hard for any of those names to even get enough plays called for them to have a big enough impact in the SB MVP race.",
      author: "Pat McAffee",
    },
  ];

  await Post.insertMany(posts);
  console.log("Created posts!");
};
const run = async () => {
  await main();
  db.close();
};

run();
