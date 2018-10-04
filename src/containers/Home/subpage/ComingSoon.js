import React,{Component} from "react";
import PropTypes from "prop-types";
import FilmItem from "./FilmItem";
import "../../../styles/film.css"

class ComingSoon extends Component {
    static propTypes = {
        comingSoons: PropTypes.array.isRequired
    };
    render() {
        return (
            <div className="coming-soon">
                {this.props.comingSoons && this.props.comingSoons.map(item=>
                    <FilmItem film={item} key={item.id} />
                )}
            </div>
        );
    }
}
export default ComingSoon;