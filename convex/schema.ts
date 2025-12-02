/**
 * Convex Database Schema
 *
 * Defines the structure of all data stored in Convex for the AI Podcast Assistant.
 * Convex provides real-time reactivity, automatic TypeScript types, and ACID transactions.
 *
 * Key Design Decisions:
 * - Single "projects" table stores all podcast processing data
 * - Denormalized structure (all data in one document) for real-time updates and atomic writes
 * - Optional fields allow progressive data population as Inngest jobs complete
 * - jobStatus tracks each generation step independently for granular UI feedback
 * - Indexes optimize common queries (user's projects, filtering by status, sorting by date)
 */

import { defineSchema, defineTable } from "convex/server";

import { v } from "convex/values";

export default defineSchema({});
