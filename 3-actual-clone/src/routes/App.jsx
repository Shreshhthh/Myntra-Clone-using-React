import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router";
import FetchItems from "../components/fetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/loading";

function App() {
  const fetchStatus = useSelector((store) => store.fetching);
  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
