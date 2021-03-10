const mongoose = require("mongoose");
const blogsRouter = require("./controllers/blogs");

// if (process.argv.length < 3) {
//   console.log(
//     "Please provide the password as an argument: node mongo.js <password>"
//   );
//   process.exit(1);
// }

const password = process.argv[2];
const url = `mongodb+srv://bede:${password}@cluster0.jjcpx.mongodb.net/blog-list?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
console.log("connected");
const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
});

blogSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Bloglist = mongoose.model("Bloglist", blogSchema);
//console.log(process.argv[3], process.argv[4], process.argv[5], process.argv[6]);
// const noteSchema = new mongoose.Schema({
//   content: String,
//   date: Date,
//   important: Boolean,
// });

// const Note = mongoose.model("Note", noteSchema);

//adding data to note
// const bloglist = new Bloglist({
//   title: process.argv[3],
//   author: process.argv[4],
//   url: process.argv[5],
//   likes: Number(process.argv[6]),
// });

// bloglist
//   .save()
//   .then((result) => {
//     console.log("blog saved!");
//     console.log(result, "yyuuuuoo");
//     mongoose.connection.close();
//   })
//   .catch((error) => {
//     console.log("blog not note saved");
//     mongoose.connection.close();
//   });

//fetching note
Bloglist.find({}).then((result) => {
  result.forEach((note) => {
    console.log(note.author);
  });
  mongoose.connection.close();
});
