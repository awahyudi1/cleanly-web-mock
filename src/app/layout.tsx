import "@/styles/globals.css";

export const metadata = {
	title: "Cleanly Upholstry Specialist",
	description: "Your Friendly Cleaning Services",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body>
				<link rel="icon" href="/cleanlyCircle.jpg" />
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
