import React from "react";
import PropTypes from "prop-types";

const MyComponent2 = ({ name, children }) => {
	return (
		<div>
			{name} 컴포넌트
			<br />
			children:{children}
		</div>
	);
};

MyComponent2.defaultProps = {
	name: "기본 이름",
};

MyComponent2.propTypes = {
	name: PropTypes.string.isRequired,
};

export default MyComponent2;
