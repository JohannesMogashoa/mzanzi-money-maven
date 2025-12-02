"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export const HeroButtons = () => {
	const router = useRouter();

	return (
		<div className="flex flex-col sm:flex-row gap-4">
			<Button
				onClick={() => router.push("/dashboard")}
				className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 text-base"
			>
				Explore Dashboard
				<ArrowRight className="ml-2 w-4 h-4" />
			</Button>
			<Button
				onClick={() => router.push("/dashboard/insights")}
				variant="outline"
				className="border-border text-foreground hover:bg-card h-12 px-8 text-base"
			>
				View Insights
			</Button>
		</div>
	);
};

export const CTAButton = () => {
	const router = useRouter();

	return (
		<Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 text-base">
			Start Your Journey
			<ArrowRight className="ml-2 w-4 h-4" />
		</Button>
	);
};
