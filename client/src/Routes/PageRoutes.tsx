import { Route, Routes } from 'react-router';
import { Home } from '../pages/Home';
import { Layout } from '../pages/Layout';
import { NotFound } from '../pages/NotFound';
import { HOME_PAGE_URL } from './URLS.const';

export default function PageRoutes() {
    return (
        <Layout>
            <Routes>
                <Route path={HOME_PAGE_URL} element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
    );
}
