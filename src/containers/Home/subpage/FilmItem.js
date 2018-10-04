import React,{Component} from "react";
import PropTypes from "prop-types";
import createBrowserHistory from "history/createBrowserHistory";
const history = createBrowserHistory ({
    forceRefresh : true
});

class FilmItem extends Component {
    static propTypes = {
        film : PropTypes.object.isRequired
    };
    render() {
        return (
            <li onClick={()=>history.push(`/detail/${this.props.film.id}`)} style={{margin : "17px 0"}}>
                <img src={this.props.film.cover && this.props.film.cover.origin} alt=""/>
                <div className="info">
                    <div>
                        <h2>{this.props.film.name}</h2>
                        {this.props.film.isNowPlaying ?
                            <p>{this.props.film.cinemaCount}影院上映,{this.props.film.watchCount}人已购票</p> : null
                        }
                    </div>
                    <strong>{this.props.film.isNowPlaying ? this.props.film.grade : this.props.film.premiereAt}</strong>
                </div>
            </li>
        );
    }
}
export default FilmItem;