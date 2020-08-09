import React from "react";
import RecipeCardContent from "./RecipeCardContent";
import MuiCard from "./Card";
class RecipeCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = {
      spans: 0,
    };
  }
  componentDidMount() {
    //this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    console.log(this.props.keyId);

    this.setState({ spans });
  };

  render() {
    console.log(this.props.recipe);
    const { image, name, label } = this.props.recipe;
    return (
      <div
        className=""
        style={{ gridRowEnd: `span ${this.state.spans}`, overflow: "hidden" }}
      >
        <MuiCard recipe={this.props.recipe} />
      </div>
    );
  }
}

export default RecipeCard;
