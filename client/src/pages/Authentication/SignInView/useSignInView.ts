import { useState } from 'react';
import { useSnackbarMessages } from '../../../hooks/useSnackbarContext';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import { HOME_PAGE_URL } from '../../../Routes/URLS.const';
import { signInSuccess } from '../../../redux/user/userSlice';
import { errorHandler } from '../../../utils/errorHandler';

interface IUser {
    email: string;
    password: string;
}

const initialValue: IUser = {
    email: '',
    password: '',
};

export function useSignInView() {
    const [state, setState] = useState<IUser>(initialValue);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { sendSnackbarMessage } = useSnackbarMessages();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setState({
            ...state,
            [e.target.name]: e.target.value as string,
        });
    }

    async function onFormSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch('/api/auth/sign-in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(state),
            });
            const data = await response.json();

            if (!data.success) {
                sendSnackbarMessage(data.message, 'error');
            } else {
                dispatch(
                    signInSuccess({
                        username: data.username,
                        email: data.email,
                        id: data.id,
                        avatar: data.avatar,
                    }),
                );
                navigate(`../${HOME_PAGE_URL}`);
            }
            setIsLoading(false);
        } catch (error) {
            errorHandler(error, sendSnackbarMessage);
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        onChangeHandler,
        onFormSubmitHandler,
    };
}
