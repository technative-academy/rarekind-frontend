import styles from './SignupPage.module.css';
import SignupForm from '../../Components/SignupForm/SignupForm';

function SignupPage() {
  return (
    <div className={styles.backdrop}>
      <SignupForm />
    </div>
  );
}

export default SignupPage;