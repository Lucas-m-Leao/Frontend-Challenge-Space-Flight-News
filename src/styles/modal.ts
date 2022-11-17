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

export const ContainerModal = styled.div`
    background-color: white;
    width: 95%;
    padding: 10px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
        height: 30%;
    }
    h2 {
        font-size: 20px;
    }
    a {
        padding: 12px;
        border: none;
        background-color: ${prop => prop.theme.color.background};
        color: #fff;
        border-radius: 3px;
    }

    @media (min-width: 768px) {
        height: 22rem;
        padding-top: 36px;
        padding-bottom: 20px;
        width: 70%;
        img {
            width: 45%;
            height: 88%;
        }
    }
`
export const TextModal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
`
export const TexTModalContainer = styled.div`
    margin-bottom: 10px;
    height: 92%;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        gap: 15px;
        flex-direction: row;
        width: 88%;
        height: 82%;
    }
`
