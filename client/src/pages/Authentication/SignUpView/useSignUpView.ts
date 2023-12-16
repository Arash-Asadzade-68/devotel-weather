import { useState } from 'react';
import { useSnackbarMessages } from '../../../hooks/useSnackbarContext';
import { useNavigate } from 'react-router';

import { SIGN_IN_PAGE_URL } from '../../../Routes/URLS.const';
import { errorHandler } from '../../../utils/errorHandler';

interface IUser {
    username: string;
    email: string;
    password: string;
}

const initialValue: IUser = {
    username: '',
    email: '',
    password: '',
};

export function useSignUpView() {
    const [state, setState] = useState<IUser>(initialValue);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { sendSnackbarMessage } = useSnackbarMessages();
    const navigate = useNavigate();

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
            const response = await fetch('/api/auth/sign-up', {
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
                navigate(`../${SIGN_IN_PAGE_URL}`);
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
