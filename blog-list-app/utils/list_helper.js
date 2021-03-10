const dummy = (blogs) => {
  return 1;
};

//returns the total likes in a list of blogs
const totalLikes = (listOfBlogs) => {
  if (listOfBlogs.length === 0) {
    return 0;
  }
  const likesArry = listOfBlogs.map((blog) => Number(blog.likes));
  return (sumOfLikes = likesArry.reduce((acc, cur) => acc + cur));
};

const blogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0,
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url:
      "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0,
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0,
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url:
      "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0,
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url:
      "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0,
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0,
  },
];

//blog with the highest number of likes
const favoriteBlog = (listOfBlogs) => {
  //assemble the likes into array and find the maximun of this array of likes
  //find the blog item with this maximum likes
  arrayOfLikes = listOfBlogs.map((blog) => blog.likes);
  const maxLike = Math.max(...arrayOfLikes);
  const blogWithMaxLikes = listOfBlogs.find((item) => item.likes === maxLike);
  return blogWithMaxLikes;
};

//returns the author with the highest number of blogs
const mostBlogs = (blogs) => {
  const authorNumberObj = {};

  blogs.forEach((blog) => {
    authorNumberObj[blog.author] =
      authorNumberObj[blog.author] === undefined
        ? 1
        : authorNumberObj[blog.author] + 1;
  });

  const maxAuthor = Math.max(...Object.values(authorNumberObj));
  console.log({ maxAuthor });
  console.log({ authorNumberObj });
  for (const key in authorNumberObj) {
    console.log({ num: authorNumberObj[key] });
    if (
      authorNumberObj.hasOwnProperty(key) &&
      authorNumberObj[key] === maxAuthor
    ) {
      return { author: key, blog: maxAuthor };
    }
  }
};

//author with the most likes
const mostLikes = () => {
  const mostLikesBlog = favoriteBlog(blogs);
  return { author: mostLikesBlog.author, likes: mostLikesBlog.likes };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
