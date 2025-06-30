import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import stores from "./stores";
import CoinCreate from "./CoinCreate";

function App() {
  return (
    <Provider store={stores}>
      <CoinCreate />
    </Provider>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// Example of how your Fetchuser component might look
function Fetchuser() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchData = async () => {
      dispatch(LoadingData(true));
      try {
        const response = await fetch("Github User Info");
        const data = await response.json();
        dispatch(UpdateData(data));
      } catch(error) {
        dispatch(ErrorData("Error Occurred"));
      } finally {
        dispatch(LoadingData(false));
      }
    };
    
    fetchData();
  }, [dispatch]);

  return null; // or your JSX
}