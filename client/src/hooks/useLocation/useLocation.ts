import useGeolocation from 'react-hook-geolocation';
import { useEffect, useState } from 'react';
import { getIpInfo } from '../../services/GeopifyServices/getIpInfo';
import { useSnackbarMessages } from '../useSnackbarContext/useSnackbarMessages';

export function useLocation() {
    const { sendSnackbarMessage } = useSnackbarMessages();
    const [ipInfo, setIpInfo] = useState<
        | {
              lat: number;
              lon: number;
          }
        | undefined
    >(undefined);
    const state = useGeolocation();

    useEffect(() => {
        async function getLocationByIp() {
            try {
                const response = await getIpInfo();
                setIpInfo({
                    lat: response.location.latitude,
                    lon: response.location.longitude,
                });
            } catch (error) {
                if (error instanceof Error) {
                    sendSnackbarMessage(error.message, 'error');
                }
            }
        }
        if (state.error) {
            getLocationByIp();
        }
        // eslint-disable-next-line
    }, [state.error]);

    return {
        lat: state.latitude || ipInfo?.lat,
        lon: state.longitude || ipInfo?.lon,
    };
}
