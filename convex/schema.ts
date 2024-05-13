import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    tokenIdentifier: v.string(),
    email: v.string(),
    firstName: v.string(),
    lastName: v.string(),
  }).index("by_token",["tokenIdentifier"]),
});