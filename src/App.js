import React from "react";
import MyComponent2 from "./MyComponent2";

const App = () => {
	return (
		// App에서 태그와 태그 사이에 데이터를 넘길 수 있다.
		<div>
			<MyComponent2 name={3}>Big</MyComponent2>
			<hr />
			<MyComponent2 name="SideBar" />
			<hr />
			<MyComponent2>
				<s>리액트</s>입니다.
			</MyComponent2>
		</div>
	);
};

export default App;
