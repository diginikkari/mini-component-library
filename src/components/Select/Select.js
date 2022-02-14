import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
    const displayedValue = getDisplayedValue(value, children);

    return (
        <Wrapper>
            <SelectElement as="select" value={value} onChange={onChange}>
                {children}
            </SelectElement>
            <IconElement id="chevron-down" size={16} strokeWidth={2} />
            <VisuallyHidden>{displayedValue}</VisuallyHidden>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    display: inline-block;
    color: ${COLORS.gray700};

    &:hover {
        color: black;
    }
`;

const SelectElement = styled.div`
    padding: 12px 52px 12px 16px;
    border: none;
    color: inherit;
    background-color: ${COLORS.transparentGray15};
    border-radius: 8px;
    appearance: none;
`;

const IconElement = styled(Icon)`
    position: absolute;
    right: 19px;
    top: 0;
    pointer-events: none;
    display: flex;
    align-items: center;
    height: 100%;
`;

export default Select;
