import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema ({
    favorites: defineTable({
        code: v.number(),
        brands: v.string(),
        ecoscoreGrade: v.string(),
        imageUrl: v.optional(v.string()),
        nutriscroeGrade: v.string(),
        productName: v.string(),
    })
    .index("by_code", ["code"]),
})