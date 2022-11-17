import { useContext, useEffect, useState } from 'react'
import Card from '../components/card'
import MiddleIcon from '../components/MiddleIcon'
import Modal from '../components/modal'
import Nav from '../components/nav'
import { ArticlesContext, IArticle } from '../context/ArticlesContext'
export default function Home() {
    const [article, setArticle] = useState<IArticle>({} as IArticle)
    const { modal } = useContext(ArticlesContext)
    useEffect(() => {
        document.body.style.overflow = modal ? 'hidden' : 'auto'
    }, [modal])
    return (
        <div>
            {modal && <Modal article={article} />}
            <Nav />
            <MiddleIcon />
            <Card setArticle={setArticle} />
        </div>
    )
}
