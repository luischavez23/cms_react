import Forms from "./Forms";
import Table from "./Table";

const CMS = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Forms />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default CMS;
