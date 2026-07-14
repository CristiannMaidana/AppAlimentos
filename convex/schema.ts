import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema ({
    favorites: defineTable({
        authUserId: v.string(),

        code: v.string(),
        brands: v.string(),
        ecoscoreGrade: v.string(),
        imageUrl: v.optional(v.string()),
        nutriscoreGrade: v.string(),
        productName: v.string(),
    })
    .index("by_user", ["authUserId"])
    .index("by_user_and_code", [
        "authUserId", "code"
    ])
})