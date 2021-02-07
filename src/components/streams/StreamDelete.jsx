import React from 'react';
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStream, deleteStream } from '../../actions/index'

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }


    actions () {
        const {id} = this.props.match.params;

        return (
            <>
                <button onClick={() => this.props.deleteStream(id)}
                        className="ui button negative">
                    Delete
                </button>
                <Link to="/" className="ui button"> Cancel</Link>
            </>
        )
    };

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?'
        }

        return `Are you sure you want to delete the stream with title - ${this.props.stream.title}`
    }

    render() {



        return (
            <>
                <Modal
                    onDismiss={() => history.push('/')}
                    actions={this.actions()}
                    content={this.renderContent()}
                    title="Delete Stream"/>
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
};

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);