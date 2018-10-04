import React,{Component} from "react";
import "../../styles/sidebar.css";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

class Navbar extends Component {
    static propTypes = {
        toggleNav : PropTypes.func.isRequired
    };
    render() {
        return (
            <div className="nav-wrapper">
                <ul>
                    <li onClick={()=>this.props.toggleNav()}>
                        <Link to="/"><span>首页</span><i className="iconfont icon-arrow-right" /></Link>
                    </li>
                    <li onClick={()=>this.props.toggleNav()}>
                        <Link to="/film"><span>影片</span><i className="iconfont icon-arrow-right" /></Link>
                    </li>
                    <li><span>影院</span><i className="iconfont icon-arrow-right" /></li>
                    <li><span>商城</span><i className="iconfont icon-arrow-right" /></li>
                    <li><span>我的</span><i className="iconfont icon-arrow-right" /></li>
                    <li><span>卖座卡</span><i className="iconfont icon-arrow-right" /></li>
                </ul>
            </div>
        );
    }
}
export default Navbar;