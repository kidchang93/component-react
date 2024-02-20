import React from "react";
import MyComponent2 from "./MyComponent2";
import MyComponentClass from "./MyComponentClass";
import Counter from "./Counter";
import Say from "./Say";

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
			{/* 클래스 컴포넌트 사용 */}
			<MyComponentClass name="class" />
			{/* State 사용 */}
			<Counter></Counter>
			<Say/>
		</div>
	);
};

export default App;
