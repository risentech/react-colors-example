/**
 * Created by Marcin Gordziejewski @ RisenDot on 08.07.2016.
 */


var React = require('react');
var Modal = require('react-modal');


module.exports = React.createClass({

    getDefaultProps: function() {
        return {
            obj: {
                value: '#000',
                message: "No message given",
                color: "Black"
            }
        }
    },

    getInitialState: function() {
        return { modalIsOpen: false };
    },

    openModal: function() {
        this.setState({modalIsOpen: true});
    },

    afterOpenModal: function() {
        // references are now sync'd and can be accessed.
        this.refs.subtitle.style.color = '#000';
    },

    closeModal: function() {
        this.setState({modalIsOpen: false});
    },

    render: function() {
        return (
            <h2 style={{ textAlign: "center" }}>
                <button style={{backgroundColor: this.props.obj.value}} onClick={this.openModal}>{this.props.obj.color}</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}>

                    <h2 ref="subtitle">Alert</h2>

                    <h3>{this.props.obj.message}</h3>
                    <button onClick={this.closeModal}>close</button>
                </Modal>
            </h2>
        );
    }
});