import { Link } from "react-router-dom";
import { Modal } from "../Modal";
import { UsersTable } from "../UsersTable";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <UsersTable />
      <div className={styles.buttonsContainer}>
        <Modal />
        <Link to="/chart">See the chart</Link>
      </div>
    </>
  );
};

export default Home;
