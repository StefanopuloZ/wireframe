import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOCALE } from '../../enums';
import { setLocaleAction } from '../../actions/AppActions';

class RouteNotFoundComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: this.props.locale,
      redirect: false,
    };
  }

  componentDidMount() {
    const location = this.props.location.pathname;

    const providedLocale = location.slice(1, 3);

    /* If valid locale provided different from current locale - update */
    if (
      Object.keys(LOCALE).includes(providedLocale) &&
      providedLocale !== this.state.locale
    ) {
      this.props.setLocaleAction(providedLocale);
      this.setState({
        locale: providedLocale,
        redirect: true,
      });
    }
  }

  render() {
    const { redirect, location } = this.state;

    return !redirect ? (
      <>
        <h1>Page not found</h1>
      </>
    ) : (
      <Redirect
        to={{
          pathname: location,
        }}
      />
    );
  }
}

RouteNotFoundComponent.propTypes = {
  location: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired,
  setLocaleAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  locale: state.AppReducer.locale,
});

const mapDispatchToProps = dispatch => ({
  setLocaleAction: locale => dispatch(setLocaleAction(locale)),
});

const RouteNotFound = connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteNotFoundComponent);

export default withRouter(RouteNotFound);
