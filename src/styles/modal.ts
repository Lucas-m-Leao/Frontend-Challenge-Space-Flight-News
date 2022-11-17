import styled from 'styled-components'

export const SectionModalContainer = styled.section`
    position: fixed;
    z-index: 1000;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Container = styled.body`
    overflow: hidden;
`
export const ContainerModal = styled.div`
    background-color: white;
    width: 95%;
    height: 20rem;
    padding: 10px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 60%;
        height: 40%;
    }
    h2 {
        font-size: 20px;
    }
`
