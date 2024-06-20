import { reviews } from "@/data/mockReview";
import { FaStar } from "react-icons/fa";

const Review = () => {
	return (
		<main className="p-8">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{reviews.map((review) => (
					<div
						key={review.id}
						className="border p-4 rounded-lg shadow-md bg-white flex flex-col items-center"
					>
						<div className="flex mb-2">
							{[...Array(5)].map((star, index) => (
								<FaStar
									key={index}
									className={
										index < review.rating ? "text-yellow-500" : "text-gray-300"
									}
								/>
							))}
						</div>
						<p className="text-gray-600 mb-4">"{review.text}"</p>
						<p className="text-lg text-gray-600 font-semibold mb-15">
							{review.author}
						</p>
					</div>
				))}
			</div>
		</main>
	);
};

export default Review;
