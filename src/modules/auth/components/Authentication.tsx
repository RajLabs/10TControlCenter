import { useAppDispatch, useAppSelector } from 'store/hooks';
import { login, logout, selectAuth } from '../authSlice';
import styles from './Authentication.module.css';

export default function Authentication() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAuth);

  return (
    <div>
      <div className={styles.row}>
        {!auth ? (
          <button
            type="button"
            className={styles.button}
            onClick={() => dispatch(login(true))}
          >
            Login
          </button>
        ) : (
          <button
            type="button"
            className={styles.button}
            onClick={() => dispatch(logout(false))}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
