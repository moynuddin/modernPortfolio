import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const config: any = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-10-21",
  // useCdn: false,
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);
export const urlFor = (source: any) => imageUrlBuilder(config).image(source);
