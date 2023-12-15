import { Logo } from './Logo';
import { NavigationBar } from './NavigationBar';

export function Header() {
    return (
        <header className="bg-slate-200 shadow-md">
            <div className="flex just justify-between max-w-6xl mx-auto p-3 items-center">
                <Logo />
                <NavigationBar />
            </div>
        </header>
    );
}
