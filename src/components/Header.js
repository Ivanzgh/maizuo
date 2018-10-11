import React,{Component} from "react";
import "../styles/navbar.css";
import PropTypes from "prop-types";

class Header extends Component {
    static propTypes = {
        title :PropTypes.string.isRequired,
        toggleNav : PropTypes.func.isRequired
    };
    render() {
        return (
            <div>
                <header>
                    <div className="navbar-left" onClick={()=>this.props.toggleNav()}>
                        <div className="bar">
                            <i className="iconfont icon-list" />
                        </div>
                        <h1>{this.props.title}</h1>
                    </div>
                    <div className="navbar-right">
                        <div className="city">北京<i className="iconfont icon-dropdown" /></div>
                        <div className="user"><i className="iconfont icon-user" /></div>
                    </div>
                </header>
            </div>
        );
    }
}
export default Header;