import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
// import { Link } from 'react-router-dom';
import { getEvent, deleteEvents, putEvent } from '../actions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class EventsShow extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  componentDidMount() {
    const { id } = this.props.match.params
    if (id) this.props.getEvent(id)
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field
    return (
      <TextField
        label={label}
        fullWidth
        margin="normal"
        {...input}
        type={type}
        error={touched && error}
        helperText={touched && error ? 'Empty field!' : ''}
      />
    )
  }

  async onDeleteClick() {
    const { id } = this.props.match.params
    await this.props.deleteEvents(id)
    this.props.history.push('/')
  }

  async onSubmit(values) {
    await this.props.putEvent(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props
    const style = { margin: 12 }

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField}/></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField}/></div>
        <div>
          <Button variant="contained" label="Submit" type="submit"  style={style} disabled={pristine || submitting || invalid}>
            Submit
          </Button>
          <Button variant="contained" label="Cancel" style={style} href="/">
            Cancel
          </Button>
          <Button variant="contained" label="Delete" style={style} onClick={this.onDeleteClick}>
            Delete
          </Button>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  if(!values.title) errors.title = "Enter a title, please."
  if(!values.body) errors.body = "Enter a body, please."
  return errors
}

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id]
  return { initialValues: event, event }
}

const mapDispatchToProps = ({ deleteEvents, getEvent, putEvent })

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true })(EventsShow)
)
