import React, { Component } from "react";

class Counter extends Component {
	// 값은 재정의가 안된다. 무조건 신규로 만들어야함.
	state = {
		number: 0,
		fixNumber: 7,
	};
	render() {
		const { number, fixNumber } = this.state;
		return (
			<div>
				<h1>{number}</h1>
				<h2>{fixNumber}</h2>
				<button
					onClick={() => {
						this.setState({ number: number + 1 });
					}}>
					+1
				</button>
			</div>
		);
	}
}

export default Counter;
