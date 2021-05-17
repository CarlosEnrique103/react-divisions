import { useHistory } from "react-router-dom";
import { Button } from "antd";
import './Home.scss';

function Home() {
  const history = useHistory();
  return (
    <div className="Home">
      <Button onClick={() => history.push("organizacion")}>
        Ir a Organización
      </Button>
    </div>
  );
}

export default Home;
