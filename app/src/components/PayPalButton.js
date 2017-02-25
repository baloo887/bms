import React, { Component, PropTypes } from 'react'
import scriptLoader from 'react-async-script-loader'
import config from '../../../config/config';

class PayPalButton extends Component {
  constructor(props) {
    super(props)
    window.React = React
    window.ReactDOM = ReactDOM
    this.state = {
      showButton: false,
      order: props.order
    }
  }

  componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
    if (!this.state.show) {
      if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
        if (isScriptLoadSucceed) {
          this.setState({ showButton: true })
          console.log('alehop!!', window.paypal.Button.react)
        }
        else this.props.onError()
      }
    }
  }

  componentDidMount () {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props
    if (isScriptLoaded && isScriptLoadSucceed) {
      this.setState({ showButton: true })
    }
  }

  componentWillUnmount() {
    delete window.React
    delete window.ReactDOM
  }

  render() {
    const client = {
      sandbox:    config.paypal.sandbox,
      production: config.paypal.sandbox
    }

    const payment = () => {
      return paypal.rest.payment.create('sandbox', client,
        {
          transactions: [
            { amount: { total: this.state.order.total, currency: this.state.order.currency } },
          ],
        },
      )
    }

    const onAuthorize = (data, actions) => {
      return actions.payment.execute().then(() => {
        console.log('The payment was completed!', this)
        this.props.dispatch(this.props.onClickFunc(this.state.order,data))
      })
    }

    const onCancel = (data) => {
      this.props.dispatch(this.props.onPaymentErr(this.state.order,data))
    }

    let button = null;

    if(this.state.showButton){
        button = <paypal.Button.react
          env={'sandbox'}
          client={client}
          payment={payment}
          commit={true}
          onAuthorize={onAuthorize}
          onCancel={onCancel}
        />
    }

    return (
      <div>{button}</div>
    )
  }
}

export default scriptLoader('https://www.paypalobjects.com/api/checkout.js')(PayPalButton)