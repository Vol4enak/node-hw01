const contacts = require("./db/contacts");
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contactList = await contacts.listContacts();
      return console.log(contactList);

    case "get":
      const getById = await contacts.getContactById(id);
      return console.log(getById);

    case "add":
      ``;
      const addById = await contacts.addContact({ name, email, phone });
      return console.log(addById);

    case "remove":
      const removeById = await contacts.removeContact(id);
      return console.log(removeById);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
