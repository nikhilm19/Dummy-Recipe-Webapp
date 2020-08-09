import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: " ",
    };
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  componentDidMount() {}

  render() {
    return (
      <div className="searchbar-container w-1/2 xl:wl-1/2 bg-gray-200">
        <form
          className="flex-grow  bg-transparent rounded px-2 py-2 "
          onChange={this.onFormSubmit}
        >
          <div className="relative">
            <span className="h-auto">
              <input
                className="text-gray-600 bg-transparent  font-metro
                pl-8 ml-6
           placeholder-gray-600 border border-transparent focus:border-gray-300
            focus:bg-white focus:placeholder-gray-500 rounded w-full py-2 px-3 
             leading-tight focus:outline-none  placeholder-gray-100 focus:placeholder-purple-500 "
                type="text"
                onSubmit={this.onFormSubmit}
                onChange={(e) => this.setState({ term: e.target.value })}
                placeholder="Search your favorite dishes"
              ></input>
            </span>
            <div className="absolute flex inset-y-0 ml-2 mr-8 pointer-events-none absolute inset-y-0 flex items-center">
              <img
                src="/icons/Icon feather-search.png"
                className="bg-white rounded-full p-2 mr-4"
              ></img>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
