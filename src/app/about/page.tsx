import Navbar from "@/components/Navbar";
import Image from "next/image";
import BackgroundCarpet from "../../../public/images/about/carpet.jpg";
import SmallLogo from "../../../public/LOGO.png";

const About = () => {
	return (
		<>
			<Navbar />
			<main className="relative flex items-center justify-center h-screen bg-cover bg-center">
				<Image
					src={BackgroundCarpet}
					alt="BackGround"
					width={1000}
					height={1000}
					className="w-full absolute -z-10 h-full brightness-50"
				/>
				<div className="text-white text-center">
					<main className="p-8">
						<h1 className="text-4xl font-bold">About Us</h1>
						<p className="text-2xl mt-4">
							<strong>Cleanly</strong> is a cleaning services company that
							focused on upholstry cleaning. Upholstry that our specialist in
							including : Sofa, Chair, Bed, and Carpet.
						</p>
						<Image
							src={SmallLogo}
							alt="Little Logo"
							width={1000}
							height={1000}
							className="w-1/5 center h-auto mx-auto brightness-146 mt-8"
						/>
						<h2>
							<p className="mt-4">
								Feel Free To Contact us{" "}
								<strong>info.cleanlyservices@gmail.com</strong>
							</p>
						</h2>
					</main>
				</div>
			</main>
		</>
	);
};

export default About;
