import React from 'react';

export default class AirticleItem extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <img src={this.props.item.urlToImage}/>
                    <p>Author: {this.props.item.author}</p>
                    <h1><a href={this.props.item.url}>{this.props.item.title}</a></h1>
                    <p>Description: {this.props.item.description}</p>
                    <p>{this.props.item.publishedAt}</p>
                </div>

            </div>
        )
    }

}