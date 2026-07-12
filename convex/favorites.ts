import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const listFavorites = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("favorites").order("desc").collect();
    },
})

export const addFavorite = mutation ({
    args: {
        code: v.string(),
        brands: v.string(),
        ecoscoreGrade: v.string(),
        imageUrl: v.optional(v.string()),
        nutriscoreGrade: v.string(),
        productName: v.string(),
    },
    handler: async (ctx, args) => {
        // Check if already exist the product
        const existingFavorite = await ctx.db.
        query("favorites").
        withIndex("by_code", (query) => 
            query.eq("code", args.code),
        ).unique();
        
        if (existingFavorite) {
            return existingFavorite._id;
        }

        await ctx.db.insert("favorites", {
            code: args.code,
            brands: args.brands,
            ecoscoreGrade: args.ecoscoreGrade,
            imageUrl: args.imageUrl,
            nutriscoreGrade: args.nutriscoreGrade,
            productName: args.productName,
        });
    }
})

export const removeFavorite = mutation ({
    args: {
        code: v.string(),
    },
    handler: async (ctx, args) => {
        const favorite = await ctx.db
        .query("favorites")
        .withIndex("by_code", (query) => 
            query.eq("code", args.code)
        ).unique();
        if (!favorite) {
            return null;
        }
        await ctx.db.delete(favorite._id);

        return favorite._id;
    }
})
