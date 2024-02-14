import {
  defaultSiteDescription,
  defaultSiteTitle,
  siteURL,
} from "../constants/siteMeta";

export const metaFieldTitle = "title";
export const metaFieldDescription = "description";
export const metaFieldSiteUrl = "siteUrl";

export const siteMetadata = {
  [metaFieldTitle]: defaultSiteTitle,
  [metaFieldDescription]: defaultSiteDescription,
  [metaFieldSiteUrl]: siteURL,
};
