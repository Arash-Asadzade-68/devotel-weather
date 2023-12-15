import { Header } from '../../components/Header';
export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <div className="h-[calc(100vh-4rem)] overflow-y-auto">{children}</div>
        </>
    );
}
