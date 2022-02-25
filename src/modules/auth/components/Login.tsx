import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { login, selectAuth } from '../authSlice';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const from = location.state?.from?.pathname || '/';
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectAuth);

  function handleSubmit() {
    dispatch(login(true));
  }

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated]);

  return (
    <div>
      <h3>Login</h3>
      <p>You must log in to view the page at {from}</p>
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
}
