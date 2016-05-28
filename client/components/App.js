import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { AppBar, TextField, Paper } from 'material-ui';
import * as TodoActions from '../actions/todos';

const darkMuiTheme = getMuiTheme(darkBaseTheme);

class App extends Component {
  render() {
    const { todos, actions, children } = this.props
    return (
      <div>
        <MuiThemeProvider muiTheme={darkMuiTheme}>
          <div>
            <AppBar
              title="Todo"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            <Paper zDepth={1}>
              <TextField
                hintText="Hint Text"
              />
            </Paper>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
