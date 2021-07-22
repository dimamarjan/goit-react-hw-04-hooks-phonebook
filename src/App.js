import { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { useLocalStorage } from "utils/useLocalSrtorage";

function App() {
  const [contacts, setСontacts] = useLocalStorage("contacts", []);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleAdd = (event) => {
    event.preventDefault();
    const { target } = event;
    const newId = uuidv4();
    let message = "";
    if (contacts.length !== 0) {
      contacts.forEach((contactItem) => {
        if (contactItem.name === name) {
          message = `${name} is already in contacts.`;
          alert(message);
        }
        if (contactItem.number === number) {
          message = `${number} is already in contacts.`;
          alert(message);
        }
      });
    }
    if (message.length === 0) {
      console.log(contacts.length);
      setСontacts((prevState) => {
        if (prevState.length !== 0) {
          return [...prevState, { id: newId, name: name, number: number }];
        } else {
          return [{ id: newId, name: name, number: number }];
        }
      });
      target[0].value = "";
      target[1].value = "";
    } else {
      target[0].value = "";
      target[1].value = "";
    }
  };

  const handleChange = ({ target }) => {
    switch (target.name) {
      case "name":
        setName(target.value);
        break;
      case "number":
        setNumber(target.value);
        break;
      case "filter":
        setFilter(target.value);
        break;
      default:
        break;
    }
  };

  const handleDelete = ({ target }) => {
    let tempArrContacts = [...contacts];
    tempArrContacts.forEach((contactElem, index) => {
      if (contactElem.id === target.value) {
        tempArrContacts.splice(index, 1);
      }
    });
    setСontacts(tempArrContacts);
  };

  useEffect(() => {
    if (filter) {
      const isDatNumber = parseInt(filter);
      if (isDatNumber) {
        setFilteredData([
          ...contacts.filter((contactItem) => {
            return contactItem.number.indexOf(filter) > -1;
          }),
        ]);
      } else {
        setFilteredData([
          ...contacts.filter((contactItem) => {
            return contactItem.name.indexOf(filter.toLowerCase()) > -1;
          }),
        ]);
      }
    } else {
      setFilteredData(contacts);
    }
  }, [filter, contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onHandleChange={handleChange} onAddContact={handleAdd} />
      <h2>Contacts</h2>
      <Filter onHandleChange={handleChange} />
      <ContactList onDelete={handleDelete} filtredDataArr={filteredData} />
    </div>
  );
}

export default App;
