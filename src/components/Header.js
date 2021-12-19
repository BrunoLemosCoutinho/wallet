import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends React.Component {
  render() {
    const { userLogin, totalExpenses } = this.props;
    return (
      <header class="header-wallet">
        <div className="email-field">
          <span class="field">Email:</span>
          <span data-testid="email-field">
            { userLogin }
          </span>
        </div>
        <div>
        <span class="field">Despesa Total:</span>
          <span
            data-testid="total-field"
            value="0"
          >
            { totalExpenses }
          </span>
        </div>
        <div className="currency-field">
          <span data-testid="header-currency-field">
            BRL
          </span>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    userLogin: state.user.email,
    totalExpenses: state.wallet.total,
  };
}

Header.propTypes = {
  userLogin: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
