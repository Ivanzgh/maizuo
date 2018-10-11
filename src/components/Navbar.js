import React,{Component} from "react";
import "../styles/sidebar.css";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

class Navbar extends Component {
    static propTypes = {
        toggleNav : PropTypes.func.isRequired
    };
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <ul>
                        <li onClick={()=>this.props.toggleNav()}>
                            <Link to="/" className='link'><span>首页</span><i className="iconfont icon-arrow-right" /></Link>
                        </li>
                        <li onClick={()=>this.props.toggleNav()}>
                            <Link to="/film" className='link'><span>影片</span><i className="iconfont icon-arrow-right" /></Link>
                        </li>
                        <li onClick={()=>this.props.toggleNav()}>
                            <Link to='/' className='link'><span>影院</span><i className="iconfont icon-arrow-right" /></Link>
                        </li>
                        <li onClick={()=>this.props.toggleNav()}>
                            <Link to='/' className='link'><span>商城</span><i className="iconfont icon-arrow-right" /></Link>
                        </li>
                        <li onClick={()=>this.props.toggleNav()}>
                            <Link to='/' className='link'><span>我的</span><i className="iconfont icon-arrow-right" /></Link>
                        </li>
                        <li onClick={()=>this.props.toggleNav()}>
                            <Link to='/' className='link'><span>卖座卡</span><i className="iconfont icon-arrow-right" /></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Navbar;