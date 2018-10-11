import React,{Component} from "react";
import Carousel from "./subpage/Carousel";
import NowPlaying from "./subpage/NowPlaying";
import ComingSoon from "./subpage/ComingSoon";
import "../../styles/film.css"

import {getBillBoards, getComingSoons, getNowPlayings} from "../../api/index";

class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            billBoards : [],
            nowPlayings : [],
            comingSoons : []
        }
    }
    componentWillMount(){
        //调用api获取轮播图的数据
        getBillBoards().then(res=>{
            this.setState ({
                billBoards : res.data.billboards
            })
        }).catch(err=>{
            console.log(err);
        });
        //调用api获取正在上映的数据
        getNowPlayings().then(res=>{
            this.setState ({
                nowPlayings : res.data.films
            })
        }).catch(err=>{
            console.log(err);
        });
        //调用api获取即将上映的数据
        getComingSoons().then(res=>{
            this.setState ({
                comingSoons : res.data.films
            })
        }).catch(err=>{
            console.log(err);
        })
    }
    render() {
        return (
            <div>
                <Carousel billBoards={this.state.billBoards}/>
                <NowPlaying nowPlayings={this.state.nowPlayings}/>
                <ComingSoon comingSoons={this.state.comingSoons}/>
            </div>
        );
    }
}
export default Index;