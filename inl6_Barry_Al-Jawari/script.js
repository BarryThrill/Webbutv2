//Barry Al-Jawari AE2699
"use strict";

const App = React.createClass({
    getInitialState() {
            return {
                dictionary: "",
                synonym: ""
            };
        },
        render() {
            return (
                <div className="App">
                <Search handleSubmit = {this.handleSubmit}
                handleChangeText = {this.handleChangeText}/> 
                
                <br/>
                
                <Results dictionary = 
                {this.state.dictionary}
                synonym = {this.state.synonym }/> 
                </div>
            );
        },
        handleChangeText(e) {
            this.setState({ searchText: e.target.value});
        },
        handleSubmit(e) {
            e.preventDefault();
            this.search(this.state.searchText);
        },
        search(text) {
            this.setState({synonym: ""});
            this.setState({dictionary: ""})
            
            var dictionaryResponse = $.getJSON("https://api.pearson.com/v2/dictionaries/ldoce5/entries?headword=" + text + "&apikey=EvW17JF3ARAPHt4gulhBtgV1GlFVDHG2")
            var synonymResponse = $.getJSON("http://thesaurus.altervista.org/thesaurus/v1?word=" + text + "&language=en_US&output=json&key=IUZR7mXeVckEoJ5dfZr0")

            dictionaryResponse.then((result) => {
                if (result.results[0] != null) {
                    this.setState({dictionary: result.results[0].senses[0].definition});
                }
            });
            synonymResponse.then((result) => {
                if (result.response[0] != null) {
                    this.setState({synonym: result.response[0].list.synonyms});
                }
            });
        }
});

const Search = React.createClass({
    render()  {
        return (
            <div className = "Search">
            <form onSubmit = {this.props.handleSubmit}>
            <input type ="text" onChange ={this.props.handleChangeText}/> 
            <button type="submit" id="searchBtn">Search!</button> 
            </form> 
            </div>
        );
    }
});

const Results = React.createClass({
    render() {
        if (this.props.dictionary && this.props.synonym) {
            return ( 
                <div className ="Results">
                <h3> Definitions of the word: </h3> 
                <p> {this.props.dictionary}</p> 
                <h3> Synonyms of the word: </h3> 
                <p> {this.props.synonym}</p> 
                </div>
            )
        } else if (this.props.dictionary == "" && this.props.synonym == "") {
            return (
                <div className ="Results">
                <h3>No search has been made or the search has failed</h3> 
                </div>
            )
        }
    }
});

ReactDOM.render(<App/> ,
    document.getElementById("root")
);
