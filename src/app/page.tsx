import Navbar from "@/components/Navbar";
import Image from "next/image";
import BackgroundHome from "../../public/vacuum.jpg";
import BackgroundLogo from "../../public/LOGO.png";

const Home = () => {
	return (
		<>
			<Navbar />
			<main className="relative items-center justify-center h-screen bg-cover bg-center">
				<Image
					src={BackgroundHome}
					alt="BackGround"
					width={1000}
					height={1000}
					className="w-full absolute -z-10 h-full brightness-50"
					style={{
						maxWidth: "100%",
						height: "100%",
					}}
				/>
				<Image
					src={BackgroundLogo}
					alt="BackGround"
					width={1000}
					height={1000}
					className="mx-auto pt-8 transition-shadow brightness-146 w-8/12 h-auto "
				/>
				<div className="p-8 text-white">
					<h1 className="text-4xl font-bold">
						Welcome to CLEANLY, your one call away home cleaning services.
					</h1>
					<p className="mt-4 text-3xl">
						We offer the best upholstry cleaning services. We also try our best
						to put out most fair price to ensure you get the best value for your
						needs.
					</p>
				</div>
			</main>
		</>
	);
};

export default Home;
