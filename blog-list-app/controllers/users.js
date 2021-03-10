const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/user");

//returns all the users in the database
usersRouter.get("/", async (request, response) => {
  const users = await User.find({}).populate("blogs", {
    url: 1,
    title: 1,
    author: 1,
  });
  //response.json(users);
  return response.json(users.map((user) => user.toJSON()));
});

usersRouter.get("/:id", (request, response, next) => {
  User.findById(request.params.id).populate("blogs", {
    url: 1,
    title: 1,
    author: 1,
  })
    .then((user) => {
      if (user) {
        response.json(user);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});


usersRouter.post("/", async (request, response) => {
  const body = request.body;

  if (body.password.length < 3 || body.password === undefined) {
    return response.status(401).json({
      error:
        "password must be present and must be greater than 3 characters long",
    });
  }
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
  });

  const savedUser = await user.save();

  response.json(savedUser);
});


usersRouter.delete("/:id", async (request, response, next) => {
  console.log("deletingggg")
  const token = request.token;
  const userId = request.params.id;
  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }
  const userid = decodedToken.id;
  //const user = await User.findById(userid);
  //const blog = await Bloglist.findById(blogId);
  if (userId.toString() === userid.toString()) {
    await User.findByIdAndRemove(userId);
    //await User.updateOne({ _id: req.token.id }, { $pull: { 'blogs': req.params.id } });

    

    response.status(204).end();
  } else {
    return response
      .status(401)
      .json({ error: "You are not authorised to remove this user" });
  }
});


module.exports = usersRouter;
