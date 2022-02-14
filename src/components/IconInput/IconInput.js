import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
    return (
        <Wrapper width={width}>
            <IconElement
                id={icon}
                size={size === 'small' ? 14 : 16}
                arial-label={label}
            />
            <VisuallyHidden>{label}</VisuallyHidden>
            <InputElement
                placeholder={placeholder}
                size={size === 'small' ? 14 : 16}
            />
        </Wrapper>
    );
};

const IconElement = styled(Icon)`
    display: inline-block;
    margin-right: 8px;
`;

const Wrapper = styled.div`
    border-bottom: 2px solid black;
    display: inline-flex;
    align-items: center;
    color: ${COLORS.gray700};
    border-radius: 2px;
    width: ${(props) => props.width + 'px'};

    &:focus-within {
        outline: 2px solid;
        outline-offset: 2px;
    }
`;

const InputElement = styled.input`
    border: none;
    font-size: ${(props) => props.size + 'px'};
    outline: none;

    &::placeholder {
        color: ${COLORS.gray500};
    }
`;

export default IconInput;
