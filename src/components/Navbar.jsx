import "../styles/styles.css";

function Items(props) {
	const itemList = props.navbarTabs.map((tab) => {
		return (
			<li
				className="relative group overflow-hidden px-3 text-slate-400 font-medium hover:cursor-default duration-200 hover:text-white"
				key={tab.tabName}
				onClick={() => props.onTabClick(tab)}
			>
				{tab.tabName}
				<div className="absolute group-hover:translate-y-[-1.5rem] left-0 bg-slate-700 w-full h-full z-[-10] duration-150"></div>
			</li>
		);
	});
	return <ul className="flex">{itemList.reverse()}</ul>;
}

function Navbar({ sectionInfo, handleTabClick }) {
	return (
		<div
			className="w-[100vh] h-12 fixed flex items-center justify-end py-2 px-2 border"
			style={{
				transform: "rotate(-90deg) translate(-100%, 0)",
				transformOrigin: "left top",
			}}
		>
			<Items
				navbarTabs={sectionInfo.reverse()}
				onTabClick={handleTabClick}
			></Items>
			<h1 className="text-3xl font-bold rotate-90 ml-2 px-5 hover:rotate-180 duration-200 hover:cursor-default">
				L
			</h1>
		</div>
	);
}

export default Navbar;
