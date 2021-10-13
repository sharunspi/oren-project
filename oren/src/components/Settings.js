import React from 'react'
import { Heart, Pencil, TrashFill } from 'react-bootstrap-icons'

export default function Settings() {
    return (
        <div className="settings">
            <div>
                <Heart className="icon ico-heart settings-item" size={24} />
            </div>
            <div>
            <Pencil size={24} className="icon settings-item" /> 
            </div>
           <div>
           <TrashFill size={24} className="icon settings-item" />
           </div>
        </div>
    )
}
