import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'
import InfiniteScroll from "react-infinite-scroll-component";


export default class NewsCont extends Component {
    constructor(){
        super();
        this.nullImg="https://mirabhayanderinfo.com/v2/uploads/images/image-not-found3.jpg";
        this.state = {
            articles:null,
            page:1,
            pageCount:0,
            loading:true,
            arr:[],
            total:200
        };
        this.ary=[]
    }
    async componentDidMount() {
        this.setState({loading:true});
        this.props.setProgress(10);
        var url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f11913b1e9314e4aa3a5114001cb323e&page=${this.state.page}`;
        var data=await fetch(url);
        this.props.setProgress(40);
        var parserdData = await data.json();
        this.props.setProgress(70);
        
        this.setState({
            articles:parserdData.articles,
            page:1,
            pageCount:parserdData.totalResults/20,
            loading:false,
            total:parserdData.totalResults
        });
        for(var i of this.state.articles){
            this.ary.push(<NewsItem title={i.title} description={i.description} url={i.url} urlToImage={i.urlToImage?i.urlToImage:this.nullImg} key={i.url}/>);
        }
        console.log(this.ary);
        this.setState({
            arr:this.ary
        })
        this.props.setProgress(100);
    }

    fetchMoreData = async () => {
        this.props.setProgress(0);
        var url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f11913b1e9314e4aa3a5114001cb323e&page=${this.state.page+1}`;
        var data=await fetch(url);
        this.props.setProgress(30);
        var parserdData = await data.json();
        this.props.setProgress(50);
        this.setState({
            articles:parserdData.articles,
            page:this.state.page+1,
        });
        for(var i of this.state.articles){
            this.ary.push(<NewsItem title={i.title} description={i.description} url={i.url} urlToImage={i.urlToImage?i.urlToImage:this.nullImg} key={i.url}/>);
        }
        this.props.setProgress(70);
        console.log(this.ary);
        this.setState({
            arr:this.ary
        })
        this.props.setProgress(100);
    };

    render() {
        
        var newsDivStyle={
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly'
        }


        return(<>
            <InfiniteScroll
                dataLength={this.ary.length}
                next={this.fetchMoreData}
                hasMore={this.ary.length<this.state.total}
                loader={<h4>Loading...</h4>}
            >
                <div key={`${this.props.key}1`} style={newsDivStyle} id="top">
                    {this.state.arr}
                </div>
            </InfiniteScroll>
            <Loader key={`${this.props.key}3`} visible={this.state.loading}/>
        </>);

    }
}
