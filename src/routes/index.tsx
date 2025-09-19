import { NavigationContainer } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

function NavigationRoutes() {
    const [user, setUser] = useState({
        name: '',
    });

    const Routes = useCallback(() => {
        if (!user) {
            return <PublicRoutes />;
        } else {
            return <PrivateRoutes />;
        }
    }, [user]);

    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    );
}

export default NavigationRoutes;
