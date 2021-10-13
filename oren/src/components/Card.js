import React, { Component } from 'react'
import { Envelope, Globe, Telephone } from 'react-bootstrap-icons'

import { getData } from '../api/fetchData'
import Settings from './Settings'

export default class Card extends Component {
    
    componentDidMount() {
        getData().then(res => {
            console.log(res)
        })
    }
    render() {
        return (
            <div className="card">
               <div className="card-body">
               <img className="avatar" src={`https://avatars.dicebear.com/v2/avataaars/${this.props.name}.svg`} />
               </div>
                <div className="details">
                    <h3> { this.props.name } </h3>
                    <ul>
                        <li> 
                            <Envelope size={24} className="icon" />
                            { 
                                this.props.email
                            }
                        </li>
                        <li> 
                            <Telephone size={24} className="icon" />
                            { 
                                this.props.phone
                            }
                        </li>
                        <li> 
                            <Globe size={24} className="icon" />
                            { 
                                this.props.website
                            }
                        </li>
                    </ul>
                </div>
                    <Settings />
            </div>
        )
    }
}
