import { useState } from "react";
import Forms from "./Forms";
import Table from "./Table";
import { Contact } from "../schemas/Contact";

const CMS = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const addContact = (contact: Contact) => {
    setContacts([
      {
        ...contact,
        id: Math.random().toString(),
      },
      ...contacts,
    ]);
  };

  const deleteContact = (id: string) => {
    const arrayFilter = contacts.filter((item) => item.id !== id);
    setContacts(arrayFilter);
  };

  console.log(contacts);
  return (
    <div className="container">
      <h2 className="display-3 text-center my-5">Contact Management System</h2>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card rounded">
            <div className="card-body">
              <div className="mb-md-5 mt-md-4 p-2">
                <Forms handleContact={addContact} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Table contacts={contacts} onClick={deleteContact} />
        </div>
      </div>
    </div>
  );
};

export default CMS;
