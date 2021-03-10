const blogsRouter = require("express").Router();
const Bloglist = require("../models/blogs");

const User = require("../models/user");
const jwt = require("jsonwebtoken");

// blogsRouter.get("/", (request, response) => {
//   Bloglist.find({}).then((blogs) => {
//     response.json(blogs);
//   });
// });

blogsRouter.get("/", async (request, response) => {
  const blogs = await Bloglist.find({}).populate("user", {
    username: 1,
    name: 1,
  });
  return response.json(blogs.map((blog) => blog.toJSON()));

  //response.json(blogs);
});

// app.get('/api/blogs', (request, response) => {
//     Blog
//       .find({})
//       .then(blogs => {
//         response.json(blogs)
//       })
//   })


blogsRouter.get("/:id", (request, response, next) => {
  Bloglist.findById(request.params.id).populate("user", {
    username: 1,
    name: 1,
  })
    .then((blog) => {
      if (blog) {
        response.json(blog);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

// notesRouter.post("/", (request, response, next) => {
//   const body = request.body;

//   const note = new Note({
//     content: body.content,
//     important: body.important || false,
//     date: new Date(),
//   });

//   note
//     .save()
//     .then((savedNote) => {
//       response.json(savedNote);
//     })
//     .catch((error) => next(error));
// });

// app.post('/api/blogs', (request, response) => {
//     const blog = new Blog(request.body)

//     blog
//       .save()
//       .then(result => {
//         response.status(201).json(result)
//       })
//   })

// const getTokenFrom = (request) => {
//   const authorization = request.get("authorization");
//   if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
//     return authorization.substring(7);
//   }
//   return null;
// };

blogsRouter.post("/", async (request, response, next) => {
  const body = request.body;
  // const token = getTokenFrom(request);
  const token = request.token;
  console.log({ token });
  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }
  const user = await User.findById(decodedToken.id);

  const blog = new Bloglist({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes || 0,
    user: user._id,
    comments:[]
  });

  const savedBlog = await blog.save();
  user.blogs = user.blogs.concat(savedBlog._id);
  await user.save();

  response.json(savedBlog);
});

// blogsRouter.post("/", async (request, response) => {
//   let body = request.body;
//   body = { ...body, likes: body.likes === undefined ? 0 : body.likes };
//   const blog = new Bloglist({ ...body, likes: Number(body.likes) });
//   const savedBlog = await blog.save();
//   // user.notes = user.notes.concat(savedNote._id);
//   // await user.save();

//   response.json(savedBlog);
// });

blogsRouter.delete("/:id", async (request, response, next) => {
  console.log("deletingggg")
  const token = request.token;
  const blogId = request.params.id;
  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }
  const userid = decodedToken.id;
  const user = await User.findById(userid);
  const blog = await Bloglist.findById(blogId);
  if (blog.user.toString() === userid.toString()) {
    await Bloglist.findByIdAndRemove(blogId);
    //await User.updateOne({ _id: req.token.id }, { $pull: { 'blogs': req.params.id } });

    user.blogs = user.blogs.filter((id) => id !== blogId);
    await user.save();

    response.status(204).end();
  } else {
    return response
      .status(401)
      .json({ error: "You are not authorised to remove this most" });
  }
});

blogsRouter.put("/:id", async (request, response, next) => {
  console.log("iinnnnnput server")
  //const body = request.body;
  const blog={
    title:request.body.title,
    author:request.body.author,
    url:request.body.url,
    likes:request.body.likes,
    comments:request.body.comments,

  }

  //console.log({body})
  let updatedBlog = await Bloglist.findByIdAndUpdate(
    request.params.id,
    blog,
    { new: true }
  );
  updatedBlog= updatedBlog.toJSON()
  const user= await User.findOne({_id:updatedBlog.user})
  updatedBlog.user= {username:user.username,name:user.name}
 console.log({updatedBlog})
return  response.json(updatedBlog);
});

// const savedNote = await note.save();
//   user.notes = user.notes.concat(savedNote._id);
//   await user.save();

//   response.json(savedNote);

// notesRouter.delete("/:id", (request, response, next) => {
//   Note.findByIdAndRemove(request.params.id)
//     .then(() => {
//       response.status(204).end();
//     })
//     .catch((error) => next(error));
// });

// notesRouter.put("/:id", (request, response, next) => {
//   const body = request.body;

//   const note = {
//     content: body.content,
//     important: body.important,
//   };

//   Note.findByIdAndUpdate(request.params.id, note, { new: true })
//     .then((updatedNote) => {
//       response.json(updatedNote);
//     })
//     .catch((error) => next(error));
// });

module.exports = blogsRouter;
