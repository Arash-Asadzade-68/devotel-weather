import { Route, Routes } from 'react-router';
import { SignInView, SignUpView } from '../pages/Authentication';
import { SIGN_IN_PAGE_URL, SIGN_UP_PAGE_URL } from './URLS.const';

export function AuthenticatonRoutes() {
    return (
        <Routes>
            <Route path={SIGN_IN_PAGE_URL} element={<SignInView />} />
            <Route path={SIGN_UP_PAGE_URL} element={<SignUpView />} />
        </Routes>
    );
}
