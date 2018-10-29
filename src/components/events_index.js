import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import { readEvents } from '../actions';

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableCell>{event.id}</TableCell>
        <TableCell>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </TableCell>
        <TableCell>{event.body}</TableCell>
      </TableRow>
    ))
  }

  render() {
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12
    }

    return (
      <React.Fragment>
        <Button variant="fab" color="primary" href="/events/new" style={style}>
          <AddIcon/>
        </Button>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.renderEvents()}
          </TableBody>
        </Table>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
