import { Link } from 'react-router-dom';
import { useSignUpView } from './useSignUpView';
import { OAuth } from '../../../components/OAuth';

export function SignUpView() {
    const { isLoading, onChangeHandler, onFormSubmitHandler } = useSignUpView();

    return (
        <section className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
            <form className="flex flex-col gap-4" onSubmit={onFormSubmitHandler}>
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    className="border p-3 rounded-lg"
                    onChange={onChangeHandler}
                    required
                />
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
                    {isLoading ? '...loading' : 'Sign Up'}
                </button>
                <OAuth />
            </form>
            <div className="flex gap-2 mt-5">
                <p>Have an account?</p>
                <Link to="../sign-in">
                    <span className="text-blue-700">Sign in</span>
                </Link>
            </div>
        </section>
    );
}
