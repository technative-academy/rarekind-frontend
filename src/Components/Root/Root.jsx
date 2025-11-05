import styles from "./Root.module.css";
import Header from "../Header/Header";
import SiteNav from "../SiteNav/SiteNav";
import Footer from "../Footer/Footer";
import MainContent from "../MainContent/MainContent";


function Root() {
  return (
      <div className={styles.wrapper}>
        <Header />
        <SiteNav />
        <MainContent />
        <Footer />
      </div>
  );
}

export default Root;