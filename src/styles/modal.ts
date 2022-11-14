import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${prop => prop.theme.color.background};
    opacity: 0.6;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ContainerModal = styled.div`
    background-color: white;
    width: 50rem;
    height: 20rem;
    border: 1px solid black;
`
