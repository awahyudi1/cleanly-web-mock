import Navbar from "@/components/Navbar";
import Image from "next/image";
import BackgroundImage from "../../../public/images/about/carpet.jpg";

const teamMembers = [
	{
		name: "Our Profesional Team Always Ready For Cleaning Duty",
		image: "/images/team/cleaningteam.jpg",
	},
];

const Teams = () => {
	return (
		<>
			<Navbar />
			<Image
				src={BackgroundImage}
				alt="BackGround"
				width={1000}
				height={1000}
				className="w-full absolute -z-10 h-full brightness-50"
			/>
			<main className="p-8">
				<h1 className="text-4xl font-bold mb-8">Our Team</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{teamMembers.map((member, index) => (
						<div key={index} className="bg-white p-4 rounded-lg shadow-md">
							<div className="relative w-full h-48 mb-4">
								<Image
									src={member.image}
									alt={member.name}
									className="rounded-lg"
									fill
									sizes="100vw"
									style={{
										objectFit: "cover",
									}}
								/>
							</div>
							<h2 className="text-xl font-semibold">{member.name}</h2>
						</div>
					))}
				</div>
			</main>
		</>
	);
};

export default Teams;
