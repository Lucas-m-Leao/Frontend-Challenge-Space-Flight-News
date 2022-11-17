import styled from 'styled-components'

export const CardConteiner = styled.li`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    img {
        width: 100%;
        height: 100%;
    }

    h2 {
        font-weight: 700;
        height: 62px;
        overflow: hidden;
    }
    p {
        height: 60px;
        overflow: hidden;
        font-weight: 400;
        font-style: oblique;
    }
    span {
        font-size: 14px;
        font-weight: 300;
    }
    margin-bottom: 2.5rem;
`
export const SectionConteiner = styled.section`
    display: flex;
    flex-direction: column;
    width: 18rem;
    height: 61vh;
    gap: 20px;
    @media (min-width: 768px) {
        flex-direction: ${prop =>
            prop.tabIndex && (prop.tabIndex + 1) % 2 === 0
                ? 'row-reverse'
                : 'row'};
        width: 59%;
        height: 28vh;
    }
`
export const ImgContainer = styled.div`
    width: 100%;
    height: 49%;
    @media (min-width: 768px) {
        height: 100%;
    }
`
export const DateContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`
export const TexTContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 55%;
    justify-content: space-between;
    button {
        margin-top: 9px;
        width: 97px;
        height: 32px;
        border: none;
        background-color: ${prop => prop.theme.color.background};
        color: #fff;
        border-radius: 3px;
    }
    @media (min-width: 768px) {
        width: 136%;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
    }
`
export const ButtonModal = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 6rem;
    button {
        border: 1px solid ${prop => prop.theme.color.background};
        color: ${prop => prop.theme.color.primary};
        width: 103px;
        height: 28px;
    }
`
export const SpanContainer = styled.span`
    width: 112px;
    border: 1px solid;
    height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${prop => prop.theme.color.background};
    color: #fff;
    border-radius: 4px;
`
