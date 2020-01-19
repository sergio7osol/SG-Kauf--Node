const chalk = require('chalk');
const yargs = require('yargs');
const purchases = require('./purchases');

// const drawing = chalk.underline.blue();

yargs.command({
  command: "add",
  describe: "Adding a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }, 
    body: {
      describe: "Body of the note",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    console.log("Title: " + argv.title);
    console.log("Body: " + argv.body);
  }
});

yargs.command({
  command: "list",
  describe: "Listing all notes",
  handler: () => {
    console.log("Listing all notes...");
  }
});

yargs.command({
  command: "read",
  describe: "Reading a new note",
  handler: () => {
    console.log("Note read...");
  }
});

yargs.parse(); // to start executing all of the above code (without it - it wouldn't run at all)