import { v } from "convex/values";

import { mutation, query } from "./_generated/server";
import { authComponent } from "./auth";

export const listFavorites = query({
  args: {},

  handler: async (ctx) => {
    const authUser = await authComponent.getAuthUser(ctx);

    return await ctx.db
      .query("favorites")
      .withIndex("by_user", (query) =>
        query.eq("authUserId", authUser._id),
      )
      .order("desc")
      .collect();
  },
});

export const addFavorite = mutation({
  args: {
    code: v.string(),
    brands: v.string(),
    ecoscoreGrade: v.string(),
    imageUrl: v.optional(v.string()),
    nutriscoreGrade: v.string(),
    productName: v.string(),
  },

  handler: async (ctx, args) => {
    const authUser = await authComponent.getAuthUser(ctx);

    const existingFavorite = await ctx.db
      .query("favorites")
      .withIndex("by_user_and_code", (query) =>
        query
          .eq("authUserId", authUser._id)
          .eq("code", args.code),
      )
      .unique();

    if (existingFavorite) {
      return existingFavorite._id;
    }

    return await ctx.db.insert("favorites", {
      authUserId: authUser._id,
      code: args.code,
      brands: args.brands,
      ecoscoreGrade: args.ecoscoreGrade,
      imageUrl: args.imageUrl,
      nutriscoreGrade: args.nutriscoreGrade,
      productName: args.productName,
    });
  },
});

export const removeFavorite = mutation({
  args: {
    code: v.string(),
  },

  handler: async (ctx, args) => {
    const authUser = await authComponent.getAuthUser(ctx);

    const favorite = await ctx.db
      .query("favorites")
      .withIndex("by_user_and_code", (query) =>
        query
          .eq("authUserId", authUser._id)
          .eq("code", args.code),
      )
      .unique();

    if (!favorite) {
      return null;
    }

    await ctx.db.delete(favorite._id);

    return favorite._id;
  },
});