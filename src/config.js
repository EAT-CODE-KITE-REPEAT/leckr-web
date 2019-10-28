/**
 * Responsibility:
 * - Define app specifics for features that could be used in multiple apps with different context
 *
 */

import Constants from "expo-constants";
import { Fundamentals } from "./types.fundamentals";
import settings from "./fundamentals.json";

const manifest = Constants.manifest;

const appConfig: Fundamentals = settings;

const labelSpecificAppConfig = appConfig.labels?.find(
  x => x.labelSlug === manifest.slug
);

const Config: Fundamentals = {
  ...appConfig, // AppCofigType
  ...labelSpecificAppConfig, //Overwrites default appconfig.
  manifest
};

export default Config;
