import { Route, Routes } from 'react-router';
import { SignInView, SignUpView } from '../pages/Authentication';
import { SIGN_IN_PAGE_URL, SIGN_UP_PAGE_URL } from './URLS.const';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function AuthenticatonRoutes() {
    return (
        <Routes>
            <Route element={<ProtectedRoute />}>
                <Route path={SIGN_IN_PAGE_URL} element={<SignInView />} />
            </Route>
            <Route element={<ProtectedRoute />}>
                <Route path={SIGN_UP_PAGE_URL} element={<SignUpView />} />
            </Route>
        </Routes>
    );
}
