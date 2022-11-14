import { useState } from 'react'
import Modal from '../components/modal'
import Nav from '../components/nav'
export default function Home() {
    const [modal, setModal] = useState(false)
    return (
        <>
            <Nav />
            {modal && <Modal />}
        </>
    )
}
