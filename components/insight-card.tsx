"use client";

import {
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import React from "react";

const InsightCard = () => {
	return (
		<Card>
			<CardHeader>
				<CardDescription>Total Revenue</CardDescription>
				<CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
					$1,250.00
				</CardTitle>
				<CardAction>
					<Badge variant="outline">
						<IconTrendingUp />
						+12.5%
					</Badge>
				</CardAction>
			</CardHeader>
			<CardFooter className="flex-col items-start gap-1.5 text-sm">
				<div className="line-clamp-1 flex gap-2 font-medium">
					Trending up this month <IconTrendingUp className="size-4" />
				</div>
				<div className="text-muted-foreground">
					Visitors for the last 6 months
				</div>
			</CardFooter>
		</Card>
	);
};

export default InsightCard;
