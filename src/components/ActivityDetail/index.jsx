import { Link, useParams } from "react-router-dom";

const ActivityDetail = () => {
  const { id } = useParams();
  const data = [
    {
      id: 1,
      hostname: "CRB-BAST-EN1-C55A2",
      totalInterface: 3,
      status: "Up",
    },
    {
      id: 2,
      hostname: "CRB-ASHS-EN1-C55A2",
      totalInterface: 3,
      status: "Up",
    },
    {
      id: 3,
      hostname: "CRB-KUDA-EN1-C55A2",
      totalInterface: 3,
      status: "Up",
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
          </tr>
        </thead>
        <tbody>
          {data.map((activity, index) => (
            <tr key={index}>
              <td>{activity.id}</td>
              <Link to={`/activity/${activity.hostname}`}>
                <td>{activity.hostname}</td>
              </Link>
              <td>{activity.totalInterface}</td>
              <td>{activity.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityDetail;
