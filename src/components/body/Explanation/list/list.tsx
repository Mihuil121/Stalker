import React, { useState } from 'react'
import { UrlText, IUrlText } from '../list/list.ts'
import './Stilylist.css'
import useStore from '../../../../Store.js'

const List: React.FC = () => {
    const { newCount, newUrl, Toss } = useStore()
    const hendelClick = (id: number) => {
        newCount(id);
        newUrl();
        Toss();
    }
    return (
        <div>

            <div className="texturl">
                <div className="text">
                    {UrlText.map((urltext: IUrlText, index: number) => (
                        <div className='divListtext'  onClick={() => hendelClick(index)}>
                            <img src={urltext.https} alt={urltext.text} style={{ width: '1.5rem', height: "1.5rem" }} />
                            <p className='urltext'>
                                {urltext.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default List