'use strict';

import { connect } from 'react-redux'
import { beginTransaction, submitNewOrder, submitPayment } from '../actions/actions'
import {FlipContainer} from './FlipContainer'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    start: () => {
      dispatch(beginTransaction())
    },
    submitOrder: (order) => {
      dispatch(submitNewOrder(order))
    },
    submitPayment: (order, data) => {
      dispatch(submitPayment(order, data))
    },
    submitPaymentError: (order,error) => {
      dispatch(submitPaymentError(order,error))
    }
  }
}

const OrderFormMng = connect(
  mapStateToProps,
  mapDispatchToProps
)(FlipContainer)

export default OrderFormMng;