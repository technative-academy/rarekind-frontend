import styles from './LoginPage.module.css';
import LoginForm from '../../Components/LoginForm/LoginForm';

function LoginPage() {
  return (
    <div className={styles.backdrop}>
      <LoginForm />
    </div>
  );
}

export default LoginPage;