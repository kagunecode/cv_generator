import "../styles/styles.css";
import sectionInfo from "../data/sectionInfo";

function Items(props) {
	const itemList = props.navbarTabs.map((tab) => {
		return (
			<li
				className="px-3 text-slate-400 font-semibold hover:cursor-default duration-200 hover:bg-slate-700 rounded-3xl hover:text-white hover:rounded-none"
				key={tab.tabName}
			>
				{tab.tabName}
			</li>
		);
	});
	return <ul className="flex">{itemList.reverse()}</ul>;
}

function Navbar() {
	return (
		<div
			className="w-[100vh] h-12 fixed flex items-center justify-end py-2 px-2 border"
			style={{
				transform: "rotate(-90deg) translate(-100%, 0)",
				transformOrigin: "left top",
			}}
		>
			<Items navbarTabs={sectionInfo.reverse()}></Items>
			<h1 className="text-3xl font-bold rotate-90 ml-2 px-5 hover:rotate-180 duration-200 hover:cursor-default">
				L
			</h1>
		</div>
	);
}

export default Navbar;
