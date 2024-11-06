import React, { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from '../../../config';
import { useCounterStore } from '../../store';
import { useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {
    const count = useCounterStore( state => state.count );
    const increaseBy = useCounterStore( state => state.increaseBy );
    const decrementBy = useCounterStore( state => state.decrementBy );
    const reset = useCounterStore( state => state.reset );
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: `Contador: ${ count }`,
        });
    }, [count, navigation]);


    return (
        <View style={ styles.container }>
            <Text> Count: { count } </Text>

            <Pressable
                style={ styles.primaryButton }
                onPress={ () => increaseBy( 1 ) }
            >
                <Text>+1</Text>
            </Pressable>

            <Pressable
                style={ styles.primaryButton }
                onPress={ () => decrementBy( 1 ) }
            >
                <Text>-1</Text>
            </Pressable>

            <Pressable
                style={ styles.primaryButton }
                onPress={ () => reset() }
            >
                <Text>Reset</Text>
            </Pressable>
        </View>
    );
};
