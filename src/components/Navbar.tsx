import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav className="bg-blue-500  text-white flex items-center justify-between py-4 px-16">
			<div className="flex items-center space-x-4">
				<Image
					src="/LOGO.png"
					alt="Company Logo"
					width={70}
					height={70}
					style={{
						maxWidth: "100%",
						height: "auto",
					}}
				/>
				<span className="text-xl font-bold"></span>
			</div>
			<ul className="flex space-x-4">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About Us</Link>
				</li>
				<li>
					<Link href="/services">Services</Link>
				</li>
				<li>
					<Link href="/teams">Teams</Link>
				</li>
				<li>
					<Link href="/review">Review</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
