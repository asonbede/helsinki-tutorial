
const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];
const url = `mongodb+srv://bede:${password}@cluster0.jjcpx.mongodb.net/noteq-app?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

//adding data to note
// const note = new Note({
//   content: "Sass  is Awesome and programmable Css",
//   date: new Date(),
//   important: true,
// });

// note
//   .save()
//   .then((result) => {
//     console.log("note saved!");
//     console.log(result, "yyuuuuoo");
//     mongoose.connection.close();
//   })
//   .catch((error) => {
//     console.log("note not note saved");
//   });

//fetching note
Note.find({ important: false }).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
