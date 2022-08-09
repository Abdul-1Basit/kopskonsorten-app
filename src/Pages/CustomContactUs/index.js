import React from "react";
import { Menu, Dropdown, Drawer, Collapse, Row, Col } from "antd";
import logo from "../../Assets/Images/logo.PNG";
import WhiteLogo from "../../Assets/Images/whiteLogo.png";
import { BsChat } from "react-icons/bs";
import {
	DownOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
} from "@ant-design/icons";

import { GrCalendar } from "react-icons/gr";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import opt1 from "../../Assets/Images/optOne.png";
import opt2 from "../../Assets/Images/optTwo.png";
import opt3 from "../../Assets/Images/optThree.png";
import opt4 from "../../Assets/Images/optFour.png";
import videoOne from "../../Assets/Videos/Company-Video.mp4";
import VideoTwo from "../../Assets/Videos/emlen-digitaler-deal-raum-90-sekunden.mp4";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { ScheduleMeeting } from "react-schedule-meeting";

import {
	ShareAltOutlined,
	ExportOutlined,
	RightOutlined,
	SearchOutlined,
} from "@ant-design/icons";
import profile from "../../Assets/Images/profile.jpg";
import backgroundImage from "../../Assets/Images/backgroundImage.png";
export default function CustomContactUs() {
	const [visible, setVisible] = React.useState(true);
	const [activeItem, setActiveItem] = React.useState(1);

	// const showDrawer = () => {
	// 	setVisible(true);
	// };

	const onClose = () => {
		setVisible(false);
	};
	const menu = (
		<Menu
			items={[
				{
					label: (
						<button
							//href="#"
							style={{ width: 80, color: "#010c42", fontWeight: "bold" }}
						>
							Releases
						</button>
					),
					key: "0",
				},
			]}
		/>
	);
	return (
		<div
			style={{
				display: "flex",
				//backgroundColor: "#fff",
				background: backgroundImage,
				minHeight: "100vh",
				flexDirection: "column",
			}}
		>
			<Row
				style={{
					//	backgroundColor: "#fff",
					backgroundColor: "rgba(255, 255, 255, 0.9)",

					padding: 20,
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					position: "fixed",
					top: 0,
					width: "100%",
				}}
			>
				<Col
					lg={12}
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						width: "100%",
					}}
				>
					<span>
						<img
							src={logo}
							style={{
								width: 130,
								height: 40,
								borderRadius: 6,
								paddingRight: 5,
								objectFit: "contain",
							}}
							alt="logo"
						/>
					</span>
					<Dropdown overlay={menu} trigger={["click"]}>
						<button
							onClick={(e) => e.preventDefault()}
							style={{ color: "#010c42", fontWeight: "bold" }}
						>
							<div
								style={{
									flexDirection: "row",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									width: 75,
								}}
							>
								Produkt
								<DownOutlined size={10} style={{ fontSize: 8 }} />
							</div>
						</button>
					</Dropdown>
					<span style={{ color: "#010c42", fontWeight: "bold" }}>Preise</span>
					<span style={{ color: "#010c42", fontWeight: "bold" }}>
						Resources
					</span>
					<span style={{ color: "#010c42", fontWeight: "bold" }}>EN</span>
				</Col>

				<Col lg={6}></Col>
				<Col
					lg={5}
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<span
						style={{
							color: "#010c42",
							fontWeight: "bold",
							paddingLeft: 50,
							paddingRight: 20,
						}}
					>
						Sign in
					</span>

					<button
						type="button"
						style={{
							color: "#fff",
							paddingTop: 7.5,
							paddingBottom: 7.5,
							paddingLeft: 15,
							paddingRight: 15,
							borderRadius: 32,
							backgroundColor: "#fe2074",
							fontWeight: "bold",
							fontSize: 13,
							outline: "none",
							border: 0,
						}}
					>
						Demo buchen
					</button>
					<div style={{ paddingLeft: 10 }}>
						{visible ? (
							<MenuFoldOutlined
								style={{ color: "#010c42", fontSize: 25 }}
								onClick={() => {
									setVisible(false);
								}}
							/>
						) : (
							<MenuUnfoldOutlined
								style={{ color: "#010c42", fontSize: 25 }}
								onClick={() => {
									setVisible(true);
								}}
							/>
						)}
					</div>
				</Col>
			</Row>
			<div
				style={{
					height: "100%",
					width: visible ? "75%" : "100%",
					//padding: 30,
					paddingTop: 100,
				}}
			>
				{activeItem === 0 && <FirstComponent />}
				{activeItem === 1 && <SecondComponent />}
				{activeItem === 2 && <ThirdComponent />}
				{activeItem === 3 && <FourthComponent />}
				{activeItem === 4 && <FifthComponent />}
			</div>
			<Row
				style={{
					backgroundColor: "#010c42",
					paddingTop: 80,
					paddingBottom: 40,
					paddingLeft: 20,
					paddingRight: 20,
				}}
			>
				<Col lg={3}>
					<span>
						<img
							src={WhiteLogo}
							style={{
								width: 130,
								height: 40,
								borderRadius: 6,
								paddingRight: 5,
								objectFit: "contain",
							}}
							alt="logo"
						/>
					</span>
					<br /> <br />
					<span style={{ fontSize: 13, color: "#fff" }}>emlen GmbH</span>
					<br />
					<span style={{ fontSize: 13, color: "#fff" }}>
						Dudweilerstraße 71
					</span>
					<br />
					<span style={{ fontSize: 13, color: "#fff" }}>66111 Saarbrücken</span>
					<br />
					<span style={{ fontSize: 13, color: "#fff" }}>Germany</span>
					<br />
				</Col>

				<Col lg={15}></Col>

				<Col lg={6}>
					<Row>
						<Col lg={12}>
							<span style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
								Product
							</span>
							<br /> <br />
							<p style={{ color: "#fff", fontWeight: "bold" }}>Product</p>
							<p style={{ color: "#fff", fontWeight: "bold" }}>Blog</p>
							<p style={{ color: "#fff", fontWeight: "bold" }}>Sign in</p>
						</Col>
						<Col lg={12}>
							{" "}
							<span style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
								Company
							</span>
							<br /> <br />
							<p style={{ color: "#fff", fontWeight: "bold" }}>Imprint</p>
							<p style={{ color: "#fff", fontWeight: "bold" }}>Data Privacy</p>
							<p style={{ color: "#fff", fontWeight: "bold" }}>
								Terms & Conditions
							</p>
							<p style={{ color: "#fff", fontWeight: "bold" }}>Data Security</p>
							<p style={{ color: "#fff", fontWeight: "bold" }}>Jobs</p>
						</Col>
					</Row>
				</Col>
				<Col lg={24} style={{ display: "flex", flexDirection: "row" }}>
					<div style={{ paddingLeft: 0, paddingRight: 10 }}>
						<FaFacebookF
							style={{
								color: "#fff",
								fontSize: 22,
							}}
						/>{" "}
					</div>
					<div style={{ paddingLeft: 15, paddingRight: 10 }}>
						<FaLinkedinIn
							style={{
								color: "#fff",
								fontSize: 22,
							}}
						/>
					</div>
					<div style={{ paddingLeft: 15, paddingRight: 10 }}>
						<FaTwitter
							style={{
								color: "#fff",
								fontSize: 22,
							}}
						/>
					</div>
				</Col>
				<Col
					lg={24}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						paddingTop: 20,
						paddingBottom: 20,
					}}
				>
					<span
						style={{
							textAlign: "center",
							fontSize: 15,
							fontWeight: "bold",
							color: "#fff",
						}}
					>
						© 2022 emlen GmbH. All rights reserved.
					</span>
				</Col>
			</Row>
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
		<div
			style={{
				height: "100%",
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				paddingTop: 120,
				paddingBottom: 60,
			}}
		>
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
				title="newVid"
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
				alignItems: "center",
				justifyContent: "center",
				display: "flex",
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
				type="new/video"
				title="Youtube Player"
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
	const { Panel } = Collapse;
	return (
		<div
			style={{
				height: "100%",
				width: "100%",
				minHeight: "100vh",
				backgroundColor: "#f1f4f9",
				display: "flex",
				paddingTop: 120,
				paddingLeft: 50,
				alignItems: "flex-start",
				justifyContent: "flex-start",
				flexDirection: "column",
			}}
		>
			<span style={{ fontSize: 40, fontWeight: "bold", color: "#010c42" }}>
				FAQ rubrics
			</span>
			<br />
			{/* <p style={{ fontSize: 25, color: "#010c42" }}>
				1- I have some questions about nxtDynamics products in general
			</p> */}
			<Collapse defaultActiveKey={["10"]} onChange={() => {}}>
				<Panel
					header=" I have some questions about nxtDynamics products in general"
					key="1"
					style={{
						padding: 20,
						color: "#010c42",
						fontSize: 20,
						backgroundColor: "transparent",
					}}
				>
					<p></p>
				</Panel>
				<Panel
					header="I have questions about the buying process of nxtEarth / nxtFlow / nxtQ"
					key="2"
					style={{
						padding: 20,
						color: "#010c42",
						fontSize: 20,
						backgroundColor: "transparent",
					}}
				>
					<p></p>
				</Panel>
				<Panel
					header="I have questions about the application and the utilization of the smartglasses:"
					key="3"
					style={{
						padding: 20,
						color: "#010c42",
						fontSize: 20,
						backgroundColor: "transparent",
					}}
				>
					<p></p>
				</Panel>
				<Panel
					header=" I have questions about the equipment of the smartglasses"
					key="4"
					style={{
						padding: 20,
						color: "#010c42",
						fontSize: 20,
						backgroundColor: "transparent",
					}}
				>
					<p></p>
				</Panel>
				<Panel
					header="I have questions about the additional products of the smartglasses"
					key="5"
					style={{
						padding: 20,
						color: "#010c42",
						fontSize: 20,
						backgroundColor: "transparent",
					}}
				>
					<p></p>
				</Panel>
				<Panel
					header="What I've asked myself about nxtDynamics GmbH"
					key="6"
					style={{
						padding: 20,
						color: "#010c42",
						fontSize: 20,
						backgroundColor: "transparent",
					}}
				>
					<p></p>
				</Panel>
			</Collapse>
			<br /> <br />
		</div>
	);
}
export function FifthComponent() {
	const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
		return {
			id,
			startTime: new Date(
				new Date(new Date().setDate(new Date().getDate() + id)).setHours(
					9,
					0,
					0,
					0
				)
			),
			endTime: new Date(
				new Date(new Date().setDate(new Date().getDate() + id)).setHours(
					17,
					0,
					0,
					0
				)
			),
		};
	});
	return (
		<div
			style={{
				height: "100%",
				width: "100%",
				minHeight: "100vh",
				//	backgroundColor: "#f0f4fa",
				backgroundColor: "#f1f4f9",
				display: "flex",
				alignItems: "center",
				paddingTop: 120,
				paddingLeft: 50,
				paddingRight: 50,
				paddingBottom: 50,
				justifyContent: "space-between",
			}}
		>
			<span style={{ fontSize: 44, fontWeight: "bold", color: "#010c42" }}>
				Buche hier einen Termin mit einem Experten:
			</span>
			<div
				style={{
					backgroundColor: "#010c42",
					width: "100%",
					maxWidth: 600,
					//borderRadius: 10,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					paddingTop: 30,
					paddingBottom: 30,
					paddingRight: 10,
					paddingLeft: 10,
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
						border: "3px solid #fff",
					}}
					alt="profile cover"
				/>
				<span
					style={{
						textAlign: "center",
						color: "#fff",
						fontSize: 28,
						paddingTop: 10,
						paddingBottom: 10,
					}}
				>
					emlen Discovery & Demo Meeting w/ Marc Grewenig (Co-Founder)
				</span>
				<ScheduleMeeting
					borderRadius={10}
					primaryColor="#3f5b85"
					eventDurationInMinutes={30}
					availableTimeslots={availableTimeslots}
					onStartTimeSelect={console.log}
				/>
			</div>
		</div>
	);
}
