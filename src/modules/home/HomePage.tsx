import { logout, selectAuth } from 'modules/auth/authSlice';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';

export default function HomePage() {
  const isAuthenticated = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  return (
    <div style={{}}>
      <h3>Tent Cmdc | Welcome</h3>

      <li>
        <Link to="/console">Dashboard</Link>
      </li>
      {!isAuthenticated ? (
        <li>
          <Link to="/login">Login</Link>
        </li>
      ) : (
        <button type="button" onClick={() => dispatch(logout(false))}>
          Logout
        </button>
      )}
    </div>
  );
}
