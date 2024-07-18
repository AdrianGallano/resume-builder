import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/hooks';
import { clearAuthData } from '../redux/features/authSlice';

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearAuthData());
    navigate('/login');
  };

  return { handleLogout };
};
