import React from 'react';
import { Text, View } from 'react-native';

import { styles } from '../../../config';
import { useProfileStore } from '../../store';

export const HomeScreen = () => {
    const name = useProfileStore( state => state.name );
    const email = useProfileStore( state => state.email );

    return (
        <View style={ styles.container }>
            <View style={ styles.container }>
            <Text style={ styles.title }>{ name }</Text>
            <Text style={ styles.title }>{ email }</Text>
        </View>
        </View>
    );
};
