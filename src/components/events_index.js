import React, { Component } from 'react';
import { connect } from 'react-redux';

import { readEvents } from '../actions';

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }
  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>{console.log(props.events)}</div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
