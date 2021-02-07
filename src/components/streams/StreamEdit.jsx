import _ from 'lodash'
import React from 'react';
import { connect } from 'react-redux'
import { fetchStream, editStream} from '../../actions/index'
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }


    onSubmit = (formValues) => {
        console.log("The form values are ",formValues)
        this.props.editStream(this.props.match.params.id, formValues)
    };

    render() {
        return (
            <div>
                <h3> Edit a Stream</h3>
                {/*Lodash pick is just grabbing the title and description values to initialize the values*/}
                <StreamForm initialValues={_.pick(this.props.stream,'title','description')} onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id],
    }
};

export default connect(mapStateToProps,{fetchStream, editStream})(StreamEdit);