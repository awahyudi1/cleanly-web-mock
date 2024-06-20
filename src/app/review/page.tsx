import Navbar from "@/components/Navbar";
import Review from "@/components/Review";
import Image from "next/image";
import BackgroundImage from "../../../public/vacuum.jpg";

const ReviewPage = () => {
	return (
		<>
			<Navbar />
			<Image
				src={BackgroundImage}
				alt="BackGround 4"
				width={1000}
				height={1000}
				className="w-full absolute -z-10 h-full brightness-50"
			/>
			<main className="p-8 text-white">
				<h1 className="text-4xl font-bold">Customer Reviews</h1>
				<p className="mt-4 text-2xl">
					{" "}
					Take a look from some of our previous customer review
				</p>
				<div className="mt-4">
					<Review />
				</div>
			</main>
		</>
	);
};

export default ReviewPage;
