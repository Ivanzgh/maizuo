import React,{Component} from "react";
import PropTypes from "prop-types";
import FilmItem from "./FilmItem";

class NowPlaying extends Component {
    static propTypes = {
        nowPlayings: PropTypes.array.isRequired
    };
    render() {
        return (
            <div className="now-playing">
                <ul>
                    {this.props.nowPlayings && this.props.nowPlayings.map(item=>
                        <FilmItem film={item} key={item.id} />
                    )}
                </ul>
            </div>
        );
    }
}
export default NowPlaying;