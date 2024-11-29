import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CardActivity({ title, path }) {
  return (
    <Card style={{ width: "auto", marginBottom: "10px" }}>
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to={path}>
          <Card.Title>{title}</Card.Title>
        </Link>
        <div>
          <Button
            style={{
              background: "#0d6efd",
              color: "white",
              marginRight: "10px",
            }}
          >
            Start
          </Button>
          <Button style={{ background: "#dc3545", color: "white" }}>
            Stop
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardActivity;
