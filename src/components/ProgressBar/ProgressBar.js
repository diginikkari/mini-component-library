/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size = 'large' }) => {
    const constants = {
        large: {
            borderRadius: '8px',
            height: '24px',
            padding: '4px',
        },
        medium: {
            borderRadius: '4px',
            height: '12px',
            padding: 0,
        },
        small: {
            borderRadius: '4px',
            height: '8px',
            padding: 0,
        },
    };

    return (
        <Wrapper
            style={{
                '--BarBorderRadius': constants[size].borderRadius,
                '--BarHeight': constants[size].height,
                '--BarPadding': constants[size].padding,
            }}
        >
            <Value>{value}</Value>
            <VisuallyHidden>{value}</VisuallyHidden>
            <ProgressBarWrapper>
                <Bar width={value} value={value}></Bar>
            </ProgressBarWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Value = styled.strong`
    margin-right: 24px;
    &:after {
        content: '%';
    }
`;

const Bar = styled.div`
    width: ${(props) => props.value + '%'};
    height: 100%;
    background-color: ${COLORS.primary};
    border-radius: 4px ${(props) => (props.value === 100 ? '4px' : 0)}
        ${(props) => (props.value === 100 ? '4px' : 0)} 4px;
`;

const ProgressBarWrapper = styled.div`
    width: 100%;
    height: var(--BarHeight);
    display: inline-block;
    padding: var(--BarPadding);
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray15};
    border-radius: var(--BarBorderRadius);
`;

export default ProgressBar;
