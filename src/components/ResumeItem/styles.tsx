import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
`;

export const Title = styled.div`
    text-align: center;
    color: #243A73;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Info = styled.div<{ color?: string }>`
    text-align: center;
    color: ${props => props.color ? props.color : '#A5BECC'};
    font-weight: bold; 
`;