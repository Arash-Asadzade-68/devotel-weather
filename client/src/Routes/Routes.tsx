import * as Sentry from '@sentry/react';
import { Routes as ReactRouterRoutes, Route } from 'react-router';
import { AuthenticatonRoutes } from './AuthenticatonRoutes';
import PageRoutes from './PageRoutes';
const SentryRoutes = Sentry.withSentryReactRouterV6Routing(ReactRouterRoutes);

export function Routes() {
    return (
        <SentryRoutes>
            <Route path={'/auth/*'} element={<AuthenticatonRoutes />} />
            <Route path={'*'} element={<PageRoutes />} />
        </SentryRoutes>
    );
}
