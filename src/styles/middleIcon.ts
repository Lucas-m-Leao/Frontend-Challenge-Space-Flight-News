import styled from 'styled-components'

export const IconContainer = styled.section`
    gap: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px 0 3rem 0;
    figure {
        width: 33%;
        border: 1px solid ${prop => prop.theme.color.background};
        border-radius: 100%;
    }
    h2 {
        font-weight: 700;
        font-size: 2.2rem;
    }
    hr {
        width: 100%;
        border-top: 1px solid ${prop => prop.theme.color.background};
    }
    @media (min-width: 768px) {
        figure {
            width: 17%;
        }
    }
`
