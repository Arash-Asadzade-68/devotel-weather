import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Navigate, Outlet } from 'react-router-dom';
import { HOME_PAGE_URL } from '../../Routes/URLS.const';

export function ProtectedRoute() {
    const user = useSelector((state: RootState) => state.user);
    return !user.id ? <Outlet /> : <Navigate to={HOME_PAGE_URL} />;
}
