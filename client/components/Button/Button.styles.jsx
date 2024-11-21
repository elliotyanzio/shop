import styled from 'styled-components';

export const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.colors.sohoLights};
    color: ${({ theme }) => theme.colors.siphon};
    width: auto;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: semibold;
    border: ${({ theme }) => `${theme.colors.sohoLights} 1px solid`};
    box-shadow: none;
    width: ${({ width }) => width ? width : 'auto'};
    height: ${({ height }) => height ? height : 'auto'};
    &:hover {
        cursor: pointer;
    }
    &:disabled {
        cursor: auto;
        background-color: ${({ theme }) => theme.colors.plum};
        border: ${({ theme }) => `${theme.colors.plum} 1px solid`};
        color: white;
        box-shadow: none;
       ;
    }
`