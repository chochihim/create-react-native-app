import React from 'react';
import { Text } from 'react-native';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components/native';

const StyledText = styled.Text`
    font-size: 10px;
`;

const TabBarLabel = ({ id, tintColor }) => (
    <FormattedMessage id={id}>
        {formattedText => <StyledText style={{ color: tintColor }}>{formattedText}</StyledText>}
    </FormattedMessage>
);

export default TabBarLabel;
