import { Link } from 'react-router-dom';
import { useSignInView } from './useSignInView';
import { OAuth } from '../../../components/OAuth';

export function SignInView() {
    const { isLoading, onChangeHandler, onFormSubmitHandler } = useSignInView();

    return (
        <section className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
            <form className="flex flex-col gap-4" onSubmit={onFormSubmitHandler}>
                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="border p-3 rounded-lg"
                    onChange={onChangeHandler}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="border p-3 rounded-lg"
                    onChange={onChangeHandler}
                    required
                />
                <button
                    disabled={isLoading}
                    className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
                >
                    {isLoading ? '...loading' : 'Sign In'}
                </button>
                <OAuth />
            </form>
            <div className="flex gap-2 mt-5">
                <p>Haven't an account?</p>
                <Link to="../sign-up">
                    <span className="text-blue-700">Sign up</span>
                </Link>
            </div>
        </section>
    );
}
