import Navbar from "@/components/Navbar";
import Image from "next/image";
import BackgroundHome from "../../../public/vacuum.jpg";

const services = [
	{ name: "Carpet Cleaning", image: "/images/services/carpetcleaning.jpg" },
	{
		name: "Sofa / Chair Cleaning",
		image: "/images/services/sofacleaning.jpg",
	},
	{
		name: "Spring Bed Cleaning",
		image: "/images/services/springbedcleaning.jpg",
	},
	{
		name: "Stroller, Doll, and Other Cleaning Needs",
		image: "/images/services/strollercleaning.jpg",
	},
];

const Services = () => {
	return (
		<>
			<Navbar />
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
			<main className="p-8">
				<h1 className="text-4xl text-white font-bold mb-8">Our Services</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{services.map((service, index) => (
						<div
							key={index}
							className="flex flex-col items-center bg-white rounded-lg p-4 shadow-md"
						>
							<Image
								src={service.image}
								alt={service.name}
								width={300}
								height={200}
								className="mb-4 rounded-lg"
								style={{
									maxWidth: "100%",
									height: "70%",
								}}
							/>
							<h2 className="text-lg font-semibold text-center">
								{service.name}
							</h2>
						</div>
					))}
				</div>
			</main>
		</>
	);
};

export default Services;
