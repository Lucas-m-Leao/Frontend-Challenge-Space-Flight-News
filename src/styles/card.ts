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
        font-weight: 400;
        height: 62px;
        overflow: hidden;
    }
    p {
        height: 60px;
        overflow: hidden;
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
    @media (min-width: 768px) {
        width: 136%;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
    }
`
