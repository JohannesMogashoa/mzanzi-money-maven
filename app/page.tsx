import { Brain, TrendingUp, Zap } from "lucide-react";
import { CTAButton, HeroButtons } from "@/components/home/button-stack";

export default function Home() {
	return (
		<div className="min-h-screen bg-linear-to-br from-background via-background to-card">
			{/* Hero Section */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="space-y-8">
						<div className="space-y-4">
							<h1 className="text-5xl sm:text-6xl font-bold text-foreground text-balance leading-tight">
								Understand Your Money,{" "}
								<span className="text-primary">
									Control Your Future
								</span>
							</h1>
							<p className="text-xl text-muted-foreground text-balance leading-relaxed">
								Your intelligent financial assistant powered by
								AI. Discover spending patterns, receive
								personalized nudges, and build better financial
								habits.
							</p>
						</div>
						<HeroButtons />
					</div>

					{/* Hero Visual */}
					<div className="relative h-96 rounded-2xl bg-linear-to-br from-card to-card/50 border border-border/40 overflow-hidden flex items-center justify-center">
						<div className="absolute inset-0 opacity-20">
							<svg
								className="w-full h-full"
								viewBox="0 0 400 400"
							>
								<defs>
									<linearGradient
										id="grad1"
										x1="0%"
										y1="0%"
										x2="100%"
										y2="100%"
									>
										<stop
											offset="0%"
											stopColor="var(--primary)"
										/>
										<stop
											offset="100%"
											stopColor="var(--accent)"
										/>
									</linearGradient>
								</defs>
								<circle
									cx="200"
									cy="200"
									r="100"
									fill="url(#grad1)"
									opacity="0.3"
								/>
								<path
									d="M200 100 L250 150 L280 120 L300 180 L250 200 L280 280 L200 250 L120 280 L150 200 L100 180 L130 120 Z"
									fill="none"
									stroke="url(#grad1)"
									strokeWidth="2"
									opacity="0.5"
								/>
							</svg>
						</div>
						<div className="relative text-center">
							<div className="text-5xl font-bold text-primary mb-2">
								R 42,847
							</div>
							<div className="text-muted-foreground">
								Monthly spending insights
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border/40">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-foreground mb-4">
						Powerful Insights. Smart Nudges.
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Built for Investec clients who want to make smarter
						financial decisions
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{[
						{
							icon: TrendingUp,
							title: "Spending Patterns",
							description:
								"Identify unique spending behaviors and trends across categories with AI-powered analysis.",
						},
						{
							icon: Brain,
							title: "Personalized Nudges",
							description:
								"Receive timely, context-aware recommendations to optimize your financial behavior.",
						},
						{
							icon: Zap,
							title: "Instant Insights",
							description:
								"Real-time analysis of your transactions with clear explanations and actionable steps.",
						},
					].map((feature, i) => {
						const Icon = feature.icon;
						return (
							<div
								key={i}
								className="p-6 rounded-xl bg-card border border-border/40 hover:border-primary/40 transition-colors group"
							>
								<div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
									<Icon className="w-6 h-6 text-primary" />
								</div>
								<h3 className="text-lg font-semibold text-foreground mb-2">
									{feature.title}
								</h3>
								<p className="text-muted-foreground text-sm leading-relaxed">
									{feature.description}
								</p>
							</div>
						);
					})}
				</div>
			</section>

			{/* CTA Section */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
				<div className="rounded-2xl bg-linear-to-r from-primary/20 to-accent/20 border border-primary/40 p-12 text-center space-y-6">
					<h2 className="text-3xl font-bold text-foreground">
						Ready to Transform Your Financial Habits?
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Join thousands of Investec clients already using
						AI-powered insights to build better financial behavior.
					</p>
					<CTAButton />
				</div>
			</section>
		</div>
	);
}
