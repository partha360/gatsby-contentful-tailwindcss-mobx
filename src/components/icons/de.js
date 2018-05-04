import React from 'react'

export default class DEFlag extends React.Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 5 3"
      >
        <desc>Flag of Germany</desc>
        <rect id="black_stripe" width="5" height="3" y="0" x="0" fill="#000" />
        <rect id="red_stripe" width="5" height="2" y="1" x="0" fill="#D00" />
        <rect
          id="gold_stripe"
          width="5"
          height="1"
          y="2"
          x="0"
          fill="#FFCE00"
        />
      </svg>
    )
  }
}
