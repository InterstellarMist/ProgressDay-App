import { NavLink } from 'react-router'
import logo from '../../assets/phoenix.svg'
import styles from './TitlePage.module.scss'

const TitlePage = () => {
  return (
    <div className="container flex-center">
      <img src={logo} className={styles.logo} />
      <h1>progress day.</h1>

      <NavLink to="tasks" className={styles.actionButton}>
        <span>Start</span>
      </NavLink>
    </div>
  );
};

export default TitlePage;
