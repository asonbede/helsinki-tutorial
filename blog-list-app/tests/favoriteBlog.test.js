const favoriteBlog = require("../utils/list_helper").favoriteBlog;

describe("Favourite blogs", () => {
  const listWithOfBlog = [
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
      _id: "5aw22aa71b54a676234d17f8",
      title: "Swif To Statement Considered Harmful",
      author: "Qdsger W. uijkstra",
      url:
        "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 15,
      __v: 0,
    },
    {
      _id: "5t422aa71b54a676234d17f8",
      title: "Swif To Statement Considered Harmful",
      author: "QEWQdsger W. uiTjkstra",
      url:
        "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 10,
      __v: 0,
    },
  ];
  const output = {
    _id: "5aw22aa71b54a676234d17f8",
    title: "Swif To Statement Considered Harmful",
    author: "Qdsger W. uijkstra",
    url:
      "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 15,
    __v: 0,
  };

  test("Test of favourite blogs", () => {
    const result = favoriteBlog(listWithOfBlog);
    expect(result).toEqual(output);
  });
});
