import React, { Dispatch, SetStateAction, useContext } from 'react'
import { ArticlesContext, IArticle } from '../context/ArticlesContext'
import {
    CardConteiner,
    DateContainer,
    ImgContainer,
    SectionConteiner,
    TexTContainer,
} from '../styles/card'

export interface ISetArticle {
    setArticle: Dispatch<SetStateAction<IArticle>>
}
const Card = ({ setArticle }: ISetArticle) => {
    const { data, setModal, setNumber, number } = useContext(ArticlesContext)
    return (
        <>
            <ul>
                {data.map((element, index) => {
                    const {
                        id,
                        imageUrl,
                        newsSite,
                        publishedAt,
                        title,
                        summary,
                    } = element
                    const date = new Date(publishedAt).toLocaleDateString('pt')
                    return (
                        <CardConteiner key={id}>
                            <SectionConteiner tabIndex={index | 0}>
                                <ImgContainer>
                                    <img src={imageUrl} alt="" />
                                </ImgContainer>
                                <TexTContainer>
                                    <h2>{title}</h2>
                                    <DateContainer>
                                        <span>{date}</span>
                                        <span>{newsSite}</span>
                                    </DateContainer>
                                    <p>{summary}</p>
                                    <div>
                                        <button
                                            onClick={() => {
                                                setArticle(element)
                                                setModal(true)
                                            }}
                                        >
                                            Ver Mais
                                        </button>
                                    </div>
                                </TexTContainer>
                            </SectionConteiner>
                        </CardConteiner>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => setNumber(number + 10)}>
                    Carregar Mais
                </button>
            </div>
        </>
    )
}

export default Card
