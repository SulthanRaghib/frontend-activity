import { Link, useParams } from "react-router-dom";

const ActivityDetail = () => {
  const { id } = useParams();
  const data = [
    {
      id: 1,
      hostname: "CRB-BAST-EN1-C55A2",
      totalInterface: 3,
      status: "OK",
    },
    {
      id: 2,
      hostname: "CRB-ASHS-EN1-C55A2",
      totalInterface: 3,
      status: "OK",
    },
    {
      id: 3,
      hostname: "CRB-KUDA-EN1-C55A2",
      totalInterface: 3,
      status: "OK",
    },
  ];

  return (
    <div className="d-flex flex-column ">
      <h1>Detail Acativit {id}</h1>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Hostname</th>
            <th scope="col">Total Interface</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((activity, index) => (
            <tr key={index}>
              <td>{activity.id}</td>
              <td>{activity.hostname}</td>
              <td>{activity.totalInterface}</td>
              <td>{activity.status}</td>
              <td>
                <Link to={`/detail-hostname/${activity.hostname}`}>Detail</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityDetail;
