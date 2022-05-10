import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { BorderlessButton } from 'react-native-gesture-handler';

import {
    Container,
    IconContainer,
    InputText,
} from './styles';

interface Props extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name']
    value?: string;
}

export function PasswordInput({
    iconName,
    value,
    ...rest
}: Props) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const theme = useTheme();

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputBlur() {
        setIsFocused(false);
        if (value) {
            setIsFilled(true)
        } else {
            setIsFilled(false)
        }
    }


    function handlePasswordVisibilityChange() {
        setIsPasswordVisible(prevState => !prevState)
    }

    return (
        <Container>
            <IconContainer>
                <Feather
                    name={iconName}
                    size={24}
                    color={(isFocused || isFilled) ? theme.colors.main : theme.colors.text_detail}
                />
            </IconContainer>

            <InputText
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                secureTextEntry={isPasswordVisible}
                isFocused={isFocused}
                {...rest}
            />

            <BorderlessButton onPress={handlePasswordVisibilityChange}>
                <IconContainer>
                    <Feather
                        name={isPasswordVisible ? 'eye-off' : 'eye'}
                        size={24}
                        color={theme.colors.text_detail}
                    />
                </IconContainer>
            </BorderlessButton>
        </Container >
    );
}