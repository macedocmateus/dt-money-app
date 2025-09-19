import { NavigationContainer } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { SystemBars } from 'react-native-edge-to-edge';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

function NavigationRoutes() {
    const [user, setUser] = useState(undefined);

    const Routes = useCallback(() => {
        if (!user) {
            return <PublicRoutes />;
        } else {
            return <PrivateRoutes />;
        }
    }, [user]);

    return (
        <NavigationContainer>
            <SystemBars style={'light'} />
            <Routes />
        </NavigationContainer>
    );
}

export default NavigationRoutes;
