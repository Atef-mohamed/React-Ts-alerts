import { BellRing, Info } from "lucide-react";
import "./App.css";
import Alert from "./components/ui/Alert/Alert";

function App() {
  return (
    <>
      <div>
        <Alert
          type="alert-danger"
          icon={<BellRing size={20} />}
          alertTitle="something come wrong"
          description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          architecto deserunt, veritatis nobis sequi doloremque? Magni non
          tempore ipsum atque."
        >
          <h5>childreeeeeeeeeeen <a href="google.com" target="_blank" >link for google</a> </h5>
        </Alert>
        
        <Alert
          type="alert-info"
          icon={<Info size={20} />}
          alertTitle="Info Alert"
          description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          architecto deserunt, veritatis nobis sequi doloremque? Magni non
          tempore ipsum atque."
        />
      </div>
    </>
  );
}

export default App;
