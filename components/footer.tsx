import React from "react";

const Footer = () => {
	return (
		<footer className="border-t border-border/40 mt-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
					<p>
						© 2025 Investec Financial Assistant. Secure by default.
					</p>
					<div className="flex gap-6">
						<a
							href="#"
							className="hover:text-foreground transition"
						>
							Privacy
						</a>
						<a
							href="#"
							className="hover:text-foreground transition"
						>
							Terms
						</a>
						<a
							href="#"
							className="hover:text-foreground transition"
						>
							Support
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
