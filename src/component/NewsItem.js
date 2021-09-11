import React, { Component } from 'react'


export default class NewsItem extends Component {
    // const {urlToImage,title,description,url} = this.props;
    

    render() {
        return (
            <div className="card m-3 p-3" key={this.props.url} style={{width: "18rem",position: "relative"}}>
                <img src={this.props.urlToImage} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">
                        {this.props.description?this.props.description.slice(0,65):""}...
                    </p>
                    <a href={this.props.url} className="btn btn-dark" style={{position: 'absolute',bottom: '10px'}}>Read Full Artical</a>
                </div>
            </div>
        )
    }
}
