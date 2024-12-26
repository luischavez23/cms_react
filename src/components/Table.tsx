type Props = {};

const Table = (props: Props) => {
  return (
    <table className="table mt-5 border">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Last name</th>
          <th scope="col">Email</th>
          <th scope="col">Group</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Family</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
