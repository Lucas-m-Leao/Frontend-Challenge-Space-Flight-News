import React, { useContext } from 'react'
import { ArticlesContext } from '../context/ArticlesContext'
import { ContainerModal, SectionModalContainer } from '../styles/modal'

export interface IArticle {
    id: number
    imageUrl: string
    publishedAt: string
    newsSite: string
    summary: string
    title: string
}
export interface IArticleProp {
    article: IArticle
}

const Modal = ({ article }: IArticleProp) => {
    const date = new Date(article.publishedAt).toLocaleDateString()
    const { setModal } = useContext(ArticlesContext)
    return (
        <SectionModalContainer>
            <ContainerModal>
                <img src={article.imageUrl} alt="" />

                <div>
                    <h2>{article.title}</h2>
                    <span>{date}</span>
                    <p>{article.summary}</p>
                </div>
                <div>
                    <button onClick={() => setModal(false)}>
                        Ir para site
                    </button>
                </div>
            </ContainerModal>
        </SectionModalContainer>
    )
}
export default Modal
