import axios, { AxiosError } from 'axios'
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useEffect,
    useState,
} from 'react'
export interface IArticle {
    events: []
    featured: boolean
    id: number
    imageUrl: string
    launches: []
    newsSite: string
    publishedAt: string
    summary: string
    title: string
    updatedAt: string
    url: string
}
export interface IArticleContext {
    data: IArticle[]
    number: number
    modal: boolean
    setNumber: Dispatch<SetStateAction<number>>
    setSearch: Dispatch<SetStateAction<string>>
    setModal: Dispatch<SetStateAction<boolean>>
}

export interface IArticleProvide {
    children: ReactNode
}
export const ArticlesContext = createContext<IArticleContext>(
    {} as IArticleContext
)

export const ArticlesProvider = ({ children }: IArticleProvide) => {
    const [modal, setModal] = useState<boolean>(false)
    const [search, setSearch] = useState<string>('')
    const [number, setNumber] = useState<number>(10)
    const [data, setData] = useState<IArticle[]>([])

    useEffect(() => {
        axios
            .get(
                `https://api.spaceflightnewsapi.net/v3/articles?title_contains=${search}&_limit=${number}`
            )
            .then(ress => setData(ress.data))
            .catch(error => error)
    }, [search, number])

    return (
        <ArticlesContext.Provider
            value={{ data, number, setNumber, setSearch, setModal, modal }}
        >
            {children}
        </ArticlesContext.Provider>
    )
}
