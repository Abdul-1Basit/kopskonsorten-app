import React from "react";
import { Button, Card, Drawer, Space } from "antd";
import logo from "../../Assets/Images/logo.PNG";
import { BsChat } from "react-icons/bs";
import { GrCalendar } from "react-icons/gr";
import opt1 from "../../Assets/Images/optOne.png";
import opt2 from "../../Assets/Images/optTwo.png";
import opt3 from "../../Assets/Images/optThree.png";
import opt4 from "../../Assets/Images/optFour.png";
import videoOne from "../../Assets/Videos/emlen-intro-digitaler-deal-raum.mp4";
import VideoTwo from "../../Assets/Videos/emlen-digitaler-deal-raum-90-sekunden.mp4";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import {
	ShareAltOutlined,
	ExportOutlined,
	RightOutlined,
	SearchOutlined,
} from "@ant-design/icons";
import profile from "../../Assets/Images/profile.jpg";
export default function CustomContactUs() {
	const [visible, setVisible] = React.useState(true);
	const [activeItem, setActiveItem] = React.useState(1);

	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		//	setVisible(false);
	};
	return (
		<div
			style={{
				display: "flex",
				backgroundColor: "#fff",
				minHeight: "100vh",
				flexDirection: "column",
			}}
		>
			<div style={{ height: "100%", width: visible ? "75%" : "100%" }}>
				{activeItem === 0 && <FirstComponent />}
				{activeItem === 1 && <SecondComponent />}
				{activeItem === 2 && <ThirdComponent />}
				{activeItem === 3 && <FourthComponent />}
				{activeItem === 4 && <FifthComponent />}
			</div>
			<Drawer
				title=""
				placement={"right"}
				closable={false}
				onClose={onClose}
				visible={visible}
				key={"right"}
				size={"default"}
				style={{
					display: "flex",
					height: "100%",
					minHeight: "100vh",
					flexDirection: "column",
				}}
			>
				<SideBar {...{ activeItem, setActiveItem }} />
			</Drawer>
		</div>
	);
}
export function SideBar(props) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				//		padding: 20,
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<img
						src={logo}
						style={{
							width: 120,
							height: 35,
							borderRadius: 6,
							paddingRight: 5,
							objectFit: "contain",
						}}
						alt="logo"
					/>
					{/* 
					<p
						style={{
							fontSize: 32,
							color: "#010c42",
							fontWeight: "bolder",
							paddingTop: 10,
						}}
					>
						emlen<span style={{ color: "#ea4785" }}>.</span>
					</p> */}
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						//	paddingRight: 20,
					}}
				>
					<ShareAltOutlined
						color="black"
						size={22}
						style={{
							color: "black",
							fontSize: 25,
							paddingRight: 30,
							fontWeight: "bold",
						}}
					/>
					<ExportOutlined style={{ color: "black", fontSize: 15 }} />
				</div>
			</div>
			<div
				style={{
					transition: "box-shadow .3s",
					paddingTop: 10,
					paddingBottom: 10,
				}}
				className="box"
			>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<img
							src={profile}
							style={{
								width: 40,
								height: 40,
								borderRadius: 40 / 2,
								paddingRight: 5,
								objectFit: "cover",
							}}
							alt="profile cover"
						/>

						<p
							style={{
								fontSize: 18,
								color: "#464a57",
								fontWeight: "normal",
								paddingTop: 15,
							}}
						>
							Marc Grewenig
						</p>
					</div>
					<RightOutlined
						size={30}
						style={{ fontWeight: "bold", fontSize: 15 }}
					/>
				</div>
			</div>
			<p style={{ textAlign: "left" }}>
				Hey Jörg,
				<br /> danke für dein Interesse an emlen. Hier kannst Du direkt einen
				Termin für die Produkt Demo mit mir vereinbaren und bereits erste Infos
				einsehen. Ich freue mich auf unser Gespräch. Gruß, Marc
			</p>
			<div
				style={{
					paddingTop: 10,
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					//			paddingRight: 15,
					//			paddingLeft: 15,
				}}
			>
				<div
					style={{
						paddingTop: 10,
						paddingBottom: 10,
						paddingRight: 30,
						paddingLeft: 30,
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						borderRadius: 4,
						backgroundColor: "#f4f5f8",
					}}
				>
					<BsChat
						style={{ color: "#464a57", fontSize: 17, fontWeight: "bolder" }}
					/>
					<span
						style={{
							color: "#464a57",
							paddingLeft: 5,
							//	fontWeight: "bold",
							fontSize: 17,
						}}
					>
						Chat
					</span>
				</div>
				<div
					style={{
						paddingTop: 10,
						paddingBottom: 10,
						paddingRight: 30,
						paddingLeft: 30,
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						borderRadius: 4,
						backgroundColor: "#f4f5f8",
					}}
				>
					<GrCalendar
						style={{ color: "#464a57", fontSize: 17, fontWeight: "bolder" }}
					/>
					<span
						style={{
							color: "#464a57",
							paddingLeft: 5,
							//	fontWeight: "bold",
							fontSize: 17,
						}}
					>
						Demo
					</span>
				</div>
			</div>
			<span
				style={{
					textAlign: "left",
					paddingTop: 20,
					paddingBottom: 20,
					fontSize: 17,
					//fontWeight: "bold",
					color: "#464a57",
				}}
			>
				Content
			</span>
			<div
				style={{
					backgroundColor: "#f4f5f8",
					paddingTop: 7,
					paddingLeft: 15,
					paddingBottom: 7,
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "flex-start",
				}}
			>
				<SearchOutlined style={{ fontSize: 15, color: "#464a57" }} />
				<input
					placeholder="Search by name"
					style={{
						fontSize: 15,
						color: "#464a57",
						backgroundColor: "transparent",
						border: 0,
						paddingLeft: 10,
					}}
				/>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
					scrollbarWidth: 10,
					marginTop: 10,
					paddingTop: 2.5,
					paddingBottom: 5,
					backgroundColor: "#f4f5f8",
					height: 300,
					overflowY: "scroll",
				}}
			>
				<div
					style={{
						flexDirection: "row",
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-start",
						border: props.activeItem === 0 ? "1px solid #ea4785" : 0,
						borderRadius: 12,
						padding: 5,
						marginTop: 5,
						marginBottom: 5,
					}}
					onClick={() => {
						props.setActiveItem(0);
					}}
					className="box"
				>
					<img
						src={opt1}
						style={{
							objectFit: "cover",
							width: 55,
							height: 55,
							borderRadius: 6,
						}}
						alt="option one"
					/>
					<span style={{ fontSize: 15, color: "#464a57", paddingLeft: 10 }}>
						emlen Intro - Digitaler Deal Raum
					</span>
				</div>
				<div
					style={{
						flexDirection: "row",
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-start",
						border: props.activeItem === 1 ? "1px solid #ea4785" : 0,
						borderRadius: 12,
						padding: 5,
						marginTop: 5,
						marginBottom: 5,
					}}
					onClick={() => {
						props.setActiveItem(1);
					}}
					className="box"
				>
					<img
						src={opt2}
						style={{
							objectFit: "cover",
							width: 55,
							height: 55,
							borderRadius: 6,
						}}
						alt="option Two"
					/>
					<span style={{ fontSize: 15, color: "#464a57", paddingLeft: 10 }}>
						emlen - Digitaler Deal Raum (90 Sekunden)
					</span>
				</div>
				<div
					style={{
						flexDirection: "row",
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-start",
						border: props.activeItem === 2 ? "1px solid #ea4785" : 0,
						borderRadius: 12,
						padding: 5,
						marginTop: 5,
						marginBottom: 5,
					}}
					onClick={() => {
						props.setActiveItem(2);
					}}
					className="box"
				>
					<img
						src={opt3}
						style={{
							objectFit: "cover",
							width: 55,
							height: 55,
							borderRadius: 6,
						}}
						alt="option Three"
					/>
					<span style={{ fontSize: 15, color: "#464a57", paddingLeft: 10 }}>
						emlen - Rethinking Buyer Enablement
					</span>
				</div>
				<div
					style={{
						flexDirection: "row",
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-start",
						border: props.activeItem === 3 ? "1px solid #ea4785" : 0,
						borderRadius: 12,
						padding: 5,
						marginTop: 5,
						marginBottom: 5,
					}}
					onClick={() => {
						props.setActiveItem(3);
					}}
					className="box"
				>
					<img
						src={opt4}
						style={{
							objectFit: "cover",
							width: 55,
							height: 55,
							borderRadius: 6,
						}}
						alt="option Four"
					/>
					<span style={{ fontSize: 15, color: "#464a57", paddingLeft: 10 }}>
						Case study CANDIS - Ganzheitliche Experience für Vertriebsunterlagen
					</span>
				</div>
				<div
					style={{
						flexDirection: "row",
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-start",
						border: props.activeItem === 4 ? "1px solid #ea4785" : 0,
						borderRadius: 12,
						padding: 5,
						marginTop: 5,
						marginBottom: 5,
					}}
					className="box"
					onClick={() => {
						props.setActiveItem(4);
					}}
				>
					<img
						src={opt4}
						style={{
							objectFit: "cover",
							width: 55,
							height: 55,
							borderRadius: 6,
						}}
						alt="option Five"
					/>
					<span style={{ fontSize: 15, color: "#464a57", paddingLeft: 10 }}>
						Termin mit Marc vereinbarens
					</span>
				</div>
			</div>
		</div>
	);
}
export function FirstComponent() {
	return (
		<div style={{ height: "100%", width: "100%", display: "flex" }}>
			{/* <source
				type="video/mp4"
				style={{ width: "100%", height: "100%" }}
            /> */}

			<iframe
				src={videoOne}
				style={{
					height: "100%",
					minHeight: "100vh",
					maxWidth: 1160,
					width: "100%",
				}}
				type="video/mp4"
				//	title="Youtube Player"

				//allow="autoplay"
				frameborder="0"
				allowFullScreen
			/>
		</div>
	);
}

export function SecondComponent() {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "flex-start",
				justifyContent: "flex-start",
			}}
		>
			{/* <source
				src="../../Assets/Videos/emlen-digitaler-deal-raum-90-sekunden.mp4"
				type="video/mp4"
				style={{ width: "100%", height: "100%" }}
			/> */}
			<iframe
				src={VideoTwo}
				style={{
					height: "100%",
					minHeight: "100vh",
					maxWidth: 1160,
					width: "100%",
				}}
				type="video/mp4"
				//	title="Youtube Player"

				//allow="autoplay"
				frameborder="0"
				allowFullScreen
			/>
		</div>
	);
}
export function ThirdComponent() {
	return (
		<div
			style={{
				height: "100%",
				width: "100%",
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<p>Third Page</p>
		</div>
	);
}
export function FourthComponent() {
	return (
		<div
			style={{
				height: "100%",
				width: "100%",
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<p>Fourth Page</p>
		</div>
	);
}
export function FifthComponent() {
	const [selectedDay, setSelectedDay] = React.useState(null);

	return (
		<div
			style={{
				height: "100%",
				width: "100%",
				minHeight: "100vh",
				backgroundColor: "#f0f4fa",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			<div
				style={{
					backgroundColor: "#010c42",
					width: "100%",
					maxWidth: 500,
					borderRadius: 10,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					paddingTop: 30,
					paddingBottom: 30,
				}}
			>
				<img
					src={profile}
					style={{
						width: 75,
						height: 75,
						borderRadius: 75 / 2,
						paddingRight: 5,
						objectFit: "cover",
					}}
					alt="profile cover"
				/>
				<span
					style={{
						textAlign: "center",
						color: "#fff",
						fontSize: 35,
						paddingTop: 10,
						paddingBottom: 10,
					}}
				>
					emlen Discovery & Demo Meeting w/ Marc Grewenig (Co-Founder)
				</span>
				<Calendar
					value={selectedDay}
					onChange={setSelectedDay}
					shouldHighlightWeekends
				/>
			</div>
			<span style={{ fontSize: 44, fontWeight: "bold", color: "#010c42" }}>
				Buche hier einen Termin mit einem Experten:
			</span>
		</div>
	);
}
