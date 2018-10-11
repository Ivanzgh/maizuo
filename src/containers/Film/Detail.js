import React,{Component} from "react";
import {getDetail} from "../../api/index";
import "../../styles/detail.css"

class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            detail : {}
        }
    }
    componentWillMount(){
        let id = this.props.match.params.id;
        getDetail(id).then(res=>{
            this.setState ({
                detail : res.data.film
            })
        }).catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div className="detail">
                <img src={this.state.detail.cover && this.state.detail.cover.origin} alt=""/>
                <h2>影片简介</h2>
                <ul>
                    <li>导演：{this.state.detail.director}</li>
                    <li>主演：{this.state.detail.actors && this.state.detail.actors[1].name}</li>
                    <li>地区语言：{this.state.detail.language}</li>
                    <li>类型：{this.state.detail.category}</li>
                    <li>上映日期：{this.state.detail.premiereAt}</li>
                </ul>
                <p>{this.state.detail.synopsis}</p>
                <button>立即买票</button>
            </div>
        );
    }
}
export default Detail;