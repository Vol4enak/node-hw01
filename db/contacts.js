const fs = require("fs/promises");

// const contactsPath = ;

console.log(123)
// TODO: задокументувати кожну функцію
const listContacts = async () => {
const data = await fs.readFile(`${__dirname}/contacts.json`, "utf-8");
return JSON.parse(data)
  }
  
  // const getContactById = async (co=> ntactId) {
  //   // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  // }
  
  // const removeContact = async (co=> ntactId) {
  //   // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  // }
  
  // const addContact = async (na=> me, email, phone) {
  //   // ...твій код. Повертає об'єкт доданого контакту. 
  // }

  module.exports = {
    listContacts,
  }