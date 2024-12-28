import { Contact } from "../schemas/Contact";

type TableProps = {
  contacts: Contact[];
  onClick: (id: string) => void;
};

const Table = ({ contacts, onClick }: TableProps) => {
  return (
    <table className="table table-striped table-hover mt-5 border">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Last name</th>
          <th scope="col">Email</th>
          <th scope="col">Group</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((item) => (
          <tr
            key={item.id}
            onClick={() => onClick(item.id)}
            style={{ cursor: "pointer" }}
          >
            <td>{item.name}</td>
            <td>{item.lastname}</td>
            <td>{item.email}</td>
            <td>{item.groupContact}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
