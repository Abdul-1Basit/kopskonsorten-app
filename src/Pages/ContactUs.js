import React from "react";
import img from "../Assets/Images/Metrics-amico.png";
export default function ContactUs() {
	return (
		<div
			style={{
				display: "flex",
				backgroundColor: "#fff",
				minHeight: "100vh",
				flexDirection: "column",
			}}
		>
			<div style={{ paddingRight: 20, paddingLeft: 20, paddingTop: 10 }}>
				<Navigation />
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					padding: 40,
				}}
			>
				<div>
					<h1 style={{ textAlign: "left" }}>Contact Us</h1>

					<p
						style={{
							color: "#e3dede",
							fontWeight: "bold",
							fontSize: 15,
							textAlign: "left",
							paddingTop: 40,
							paddingBottom: 40,
							paddingRight: 200,
						}}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<button
						type="button"
						style={{
							color: "#dedede",
							paddingTop: 15,
							paddingBottom: 15,
							paddingLeft: 40,
							paddingRight: 40,
							borderRadius: 32,
							backgroundColor: "#fe2074",
							fontWeight: "bold",
							outline: "none",
							border: 0,
						}}
					>
						CONTACT
					</button>
				</div>

				<div style={{ width: "100%" }}>
					<img
						src={img}
						alt="contact us"
						style={{
							objectFit: "contain",
							//maxWidth: 850,
							width: 650,
							height: 550,
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export function Navigation() {
	const [activeOption, setActiveOption] = React.useState(0);
	return (
		<div
			style={{
				backgroundColor: "#fff",
				paddingLeft: 15,
				paddingRight: 15,
				paddingTop: 10,
				paddingBottom: 10,

				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "center",
				//boxShadow: "0px 2px 0px #000",
				//	borderBottomWidth: 2,
				borderBottom: "2px solid #dedede",
				//	borderTopWidth: 0,
				//	borderRightWidth: 0,
				//	borderLeftWidth: 0,
			}}
		>
			<div
				style={{
					alignItems: "center",
					justifyContent: "center",
					width: "100%",
				}}
			>
				<span
					style={{
						color: activeOption === 0 ? "#fff" : "#dedede",
						paddingTop: 12,
						paddingBottom: 12,
						paddingLeft: 40,
						paddingRight: 40,
						borderRadius: 32,
						fontWeight: "bold",
						backgroundColor: activeOption === 0 ? "#fe2074" : "#fff",
					}}
					onClick={() => {
						setActiveOption(0);
					}}
				>
					HOME
				</span>
			</div>
			<div
				style={{
					alignItems: "center",
					justifyContent: "space-between",
					flexDirection: "row",
					display: "flex",
					width: "100%",
				}}
			>
				<span
					style={{
						color: activeOption === 1 ? "#fff" : "#dedede",
						paddingTop: 12,
						paddingBottom: 12,
						paddingLeft: 40,
						paddingRight: 40,
						borderRadius: 32,
						backgroundColor: activeOption === 1 ? "#fe2074" : "#fff",
						fontWeight: "bold",
					}}
					onClick={() => {
						setActiveOption(1);
					}}
				>
					BLOG
				</span>
				<span
					style={{
						color: activeOption === 2 ? "#fff" : "#dedede",
						paddingTop: 12,
						paddingBottom: 12,
						paddingLeft: 40,
						paddingRight: 40,
						borderRadius: 32,
						fontWeight: "bold",
						backgroundColor: activeOption === 2 ? "#fe2074" : "#fff",
					}}
					onClick={() => {
						setActiveOption(2);
					}}
				>
					ISSUES
				</span>
				<span
					style={{
						color: activeOption === 3 ? "#fff" : "#dedede",
						paddingTop: 12,
						paddingBottom: 12,
						paddingLeft: 40,
						paddingRight: 40,
						borderRadius: 32,
						fontWeight: "bold",
						backgroundColor: activeOption === 3 ? "#fe2074" : "#fff",
					}}
					onClick={() => {
						setActiveOption(3);
					}}
				>
					TEAM
				</span>
				<span
					style={{
						color: activeOption === 4 ? "#fff" : "#dedede",
						paddingTop: 12,
						paddingBottom: 12,
						paddingLeft: 40,
						paddingRight: 40,
						borderRadius: 32,
						fontWeight: "bold",
						backgroundColor: activeOption === 4 ? "#fe2074" : "#fff",
					}}
					onClick={() => {
						setActiveOption(4);
					}}
				>
					INFO
				</span>
			</div>
		</div>
	);
}
