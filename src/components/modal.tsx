import React, { useContext } from 'react'
import { ArticlesContext } from '../context/ArticlesContext'
import {
    ContainerModal,
    SectionModalContainer,
    TextModal,
    TexTModalContainer,
} from '../styles/modal'

export interface IArticle {
    id: number
    imageUrl: string
    publishedAt: string
    newsSite: string
    summary: string
    title: string
    url: string
}
export interface IArticleProp {
    article: IArticle
}

const Modal = ({ article }: IArticleProp) => {
    const date = new Date(article.publishedAt).toLocaleDateString()
    const { setModal } = useContext(ArticlesContext)
    return (
        <SectionModalContainer onClick={() => setModal(false)}>
            <ContainerModal>
                <TexTModalContainer>
                    <img src={article.imageUrl} alt="" />

                    <TextModal>
                        <h2>{article.title}</h2>
                        <span>{date}</span>
                        <p>{article.summary}</p>
                    </TextModal>
                </TexTModalContainer>
                <div>
                    <a
                        href={article.url}
                        target="_blank"
                        onClick={() => setModal(false)}
                    >
                        Ir para site
                    </a>
                </div>
            </ContainerModal>
        </SectionModalContainer>
    )
}
export default Modal
