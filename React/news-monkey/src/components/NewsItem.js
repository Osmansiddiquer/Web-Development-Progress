import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItem extends Component {
    static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        imgURL: PropTypes.string
    }
    render() {
        let { title, description, imgURL, newsURL } = this.props;
        return (
            <div>
                <a href={newsURL}>
                    <div className="card" style={{ "width": 18 + "rem" }}>
                        <img src={imgURL} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}

export default NewsItem