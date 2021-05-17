import { useHistory } from "react-router-dom";
import { Button } from "antd";
import './Home.scss';

function Home() {
  const history = useHistory();
  return (
    <div className="Home">
      <Button onClick={() => history.push("organizacion")}>
        Ir a la Organización
      </Button>
    </div>
  );
}

export default Home;
