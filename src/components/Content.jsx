import React from 'react'
import '../styles/Content.css'
import Img from '../../public/content-img.avif'

export default function Content() {
    return (
        <div className='container'>
            <div className='info'>
                1
            </div>
            <div className='image'>
                <img src={Img} width={'100%'}/>
            </div>
        </div>
    )
}
