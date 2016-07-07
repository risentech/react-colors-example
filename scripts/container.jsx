/**
 * Created by Marcin Gordziejewski @ RisenDot on 07.07.2016.
 */


var React = require('react');
var $ = require('jquery');
var jsonData = require('./../example-data.json');
var Modal = require('react-modal');
var Button = require('./button.jsx');


function getRemoteData(reactContext) {
    $.get("./example-data.json", function(result) {
        console.log(e);
    })
}

module.exports = React.createClass({
    getInitialState: function() {
        return {
            els: []
        }; //
    },
    componentDidMount: function () {
        // getRemoteData(this); //Should be user whenever there is remote data.
        console.log(jsonData);
        this.setState({
            els: jsonData.colors
        })
    },
    render: function() {
        var arrayToShow = [];
        for (var i=0; i < this.state.els.length; i++) {
            arrayToShow.push(
                <Button obj={this.state.els[i]} />
            );
        }
        if (arrayToShow.length < 1) {
            return <h1>Nothing to show</h1>;
        } else {
            return <div>
                {
                    arrayToShow.map(function(el){
                        return el;
                    })
                }
            </div>;//
        }
    }
});