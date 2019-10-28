export type Option = {
  /**
   * only relevant in the optionsArray. if given, this option will be chosen only if the given ref is given as a parameter
   */
  ref?: string
};
/**
 * hard to define all options, as it depends per section.
 *
 * But for localization:
 * - every string can be a string or a language-object, which is an object like this: `{nl: string, en: string, de: string, es: string, pt: string}`.
 *
 */
export type SectionTypes = {
  /**
   * any section is on this type currently. Later, make a specific type declaration for every section, so it's easy to write this.
   */
  section: any,
  downloadSection: any,
  feedbackSection: any
};

export type Section = {
  type: string,

  /**
   * can be given if multiple refs are possible
   */
  optionsArray: (Option & SectionTypes)[]
} & SectionTypes;

/**
 * Either a regular screen or a screen defined by sections
 */
export type Page = {
  /**
   * title that should be used, based on params
   */
  title?: ({ params?: Object }) => string,

  /**
   * Route to navigate (Use a capital)
   */
  route: string,

  /**
   * Path used in the URL (prefer dashes and lower case)
   */
  path: string,

  showInMenu: boolean,
  showInFooter: boolean,
  showInMore: boolean,

  screen?: any
};

type Emoji = string;
type Icon = string; //e.g. FontAwesome.xxxx
type ImageUrl = string;

/**
 *  There are multiple levels to this:
 *
 * 1. elements: The information that's needed for every app. This is provided at the start
 * 2. generated config: config is generated based on elements and a lot of defaults. This is what you'll find in config.js
 * 3. provided assets: KV stores of certain objects, images, and other assets, needed for the app. This is provided by the team.
 * 4. dynamic assets: generated assets based on the app that's running. for example, screenshots of the app, which will be needed in some upcoming automated processes.
 *
 * Based on elements, basically everything can be generated!!! Obviously there can be a lot more fluff on any landing page, but since I focus on viral and to-the-point products, this shouldn't be needed.
 *
 * Based on this, the app folder with assets, app.json, config.js, and a default index can be generated.

 */

export type IOSAssets = {
  /**
   * if I define all assets here, it becomes super easy for others to create everything. Just fill in everything.
   */
};

export type AndroidAssets = {
  /**
   * 80 chars max
   */
  shortDescription: string,
  /**
   * 4000 chars max
   */
  longDescription: string,
  /**
   * 512 x 512, 32-bit PNG
   */
  hiResIcon: null,

  /**
   * 2 screenshots: JPEG or 24-bit PNG (no alpha). Min length for any side: 320px. Max length for any side: 3840px.
   */
  screenshot: null[],

  /**
   * featureGraphic
   * -  1024 w x 500 h
   * - JPG or 24-bit PNG (no alpha)
   */
  featureGraphic: null,

  /**
   * YT link
   */
  promoVideo?: string
};

/**
 * intro config to determine what to do for intro
 */

export type TeamMember = {
  id: number,
  /**
   * url to go as an action on this person
   */
  url: string,
  /**
   * can also be a nickname, whatever you want the world to know
   */
  firstName: string,
  /**
   * this will be taken and saved as local image
   */
  remoteImage?: string,
  /**
   * image will be saved under this address in app-specific folder for this app. Hopefully, it can be required dynamically. Should be doable.
   */
  localImage?: string,
  /**
   * God damnit that indian chick is so hot and she also has a booki.
   */
  role?: string,
  /**
   * Whatever the user needs to see
   */
  description?: string
};

type AppType = (
  | "community-app"
  | "contact-app"
  | "object-app"
  | "data-form-app"
)[];

export type Layout = {
  /**
   * Colors inside the app (defaults will be used)
   *
   * NEED TO GO OVER THIS AND MAKE NAMES MORE CLEAR FOR DESIGN
   */
  colors: {
    /**
     * name of the layout
     */
    layout: string,
    defaultText: string,
    /**
     * primary  color again
     */
    primary: string,
    iconHighlightColor: string,
    iosButtonColor: string,
    primaryDarker: string,
    primaryLighter: string
  },

  /**
   * Style for this particular layout
   * Can be done so much more with this
   */
  style: { fontFamily: { title: string, text: string } }
};

/**
 * Fundamentals
 */

export type Fundamentals = {
  /**
   * Name of the app
   */
  name: string,

  /**
   * Company of the app
   */
  companyName: string,

  /**
   * if true, don't include page 'home' because it's included customly in index
   */
  customHome: boolean,
  /**
   * Add pages that should be reachable here. DefaultPages will be added to this list.
   *
   */
  pages: Page[],

  defaultPages: {
    /**
     * set to false to remove
     */
    privacy: false,

    /**
     * set to false to remove
     */
    team: false
  },

  /**
   * Domain of the app (could be based on name)
   */
  domain?: string,

  /**
   * First sentence 0-60. Optional, second other sentences as long as you want.
   */
  descriptions?: string[],

  /**
   * will be a/b tested
   */
  slogans?: string[],

  /**
   * Can be markdown
   */
  missionStatement?: string,

  /**
   * slug universal to whole app. Used to know folder name and maybe other things
   *
   * STILL NEEDS TO BE DEFINED WHEN THIS IS USED (slug vs labelSlug)
   */
  slug?: string,

  /**
   * labelSlug (to be set on the label)
   *
   * STILL NEEDS TO BE DEFINED WHEN THIS IS USED (slug vs labelSlug)
   */
  labelSlug?: string,

  /**
   * keywords describing your app(s); can be used for SEO, ASO, and several API's
   */
  keywords: string[],

  /**
   * can be based on domain etc.
   */
  email: string,
  /**
   * can be written here with hyphens/spaces etc for readability
   */
  phoneNumber: string,

  /**
   * Apps to show on homepage.
   *
   * MAY BE TOO CUSTOM...
   */
  appsToShow: Object[],

  /**
   * Any app, or any label, can have multiple layouts.
   *
   * Many possibilities
   * - define presets that can be added through LECKR App Interface
   * - create layouts.js that exports colors, style, and maybe more in the future
   *
   * When I really do this, make sure I don't enforce some elemental things to have access to Config. Anything that may be open sourced later, must NOT need access to layout. It should use a well typed, well documented Layout prop.
   *
   */
  layouts: Layout[],
  /**
   * Every line is a string. Array of lines.
   */
  address: string[],

  /**
   * Chamber of Commerce number or English counterpart
   */
  kvk: string,
  /**
   * Tax number or English counterpart
   */
  btw: string,
  /**
   * Bank account to show on forms
   */
  bankAccount: string,

  /**
   * Team members for this startup
   *
   * SHOULD MIGRATE TO PEOPLE
   */
  teamMembers?: TeamMember[],

  /**
   * Automatically generated from people database, based on which people are relevant for within the static app. Mostly team members, but, for example, for the LECKR APP, it may be everyone.
   */
  people?: any[],

  /**
   * NOT USED FOR NOW. In the future, this can be handy to know which screens should be added.
   */
  appTypes?: AppType[],

  /**
   * set to true if https isnt working. to be removed later
   */
  enforceHttp: boolean,

  /**
   * language the app is in. Used to translate feature-specifics. For now, one label can only have one language. This means it's impossible for the user to change the language. Hypothesis is it's very cheap to maintain multiple labels, and virality does't go through the language barrier that quickly anyway. This  removes the need for a language detection system, a language settings section, dynamic language instead of straight from a JSON file, and much more complexity...
   *
   */
  language: "nl" | "en",

  /**
   * currently it's attached to Roadeo's backend
   */
  sendSensorsToBackend: boolean,

  /**
   * Which sensors should be trackable available in the app. This defines things in app.json as well as available settings
   */
  sensors: {
    backgroundLocation: boolean,
    location: boolean,
    accelerometer: boolean,
    backgroundAccelerometer: boolean
  },

  /**
   * ghost endpoint
   *
   * All blogs will be found for slug (and labelSlug, if not the same)
   */
  ghostLink: string,
  /** key for ghost endpoint, to be found in ghost config */
  ghostKey: string,
  /** turn true to disable ghost */
  ghostDisabled: true,
  /**
   * loading facts (for now).
   *
   * Can be used in many more cases.
   *
   * - Could be generalized to more fundamental truths.
   * - Could be extracted from Universal DB.
   * - Could be extracted from Ghost Entries.
   * - Could help you generate Ghost Entries
   *
   * A more typed definition could also be used in the future, if there appear to be more different statements.
   */
  statements: string[],

  /**
   * no header if true
   */
  noWebHeader: boolean,
  /**
   * no web footer if true
   */
  noWebFooter: boolean,

  /**
   * if filled in, it means the app can be found in the store so some features will be turned on which normally aren't
   */
  iosLink: string,

  /**
   * if filled in, it means the app can be found in the playstore so some features will be turned on which normally aren't
   */
  androidLink: string,

  /**
   * Initially, I should just have one form-factor. But eventually there will be multiple types based on what you can do. Don't know yet if this should be used but it's certainly worth thinking about. Another option would be feature flags but this requires more variables, which may not be necessary.
   */
  websiteFormFactor: number,

  /**
   * Goal: Show progress of website in small increments to client. Handy for ProtoMouse. ProtoMouse can then be published instantly, while just having some Date based feature flags. Should, ideally, go hand in hand with automated pre-planned emails/sms messages, in the correct language, to the whole team.
   *
   * - stage 1: just show placeholder: +1 day
   * - stage 2: show home page: +2 days
   * - stage 3: also show team page, about page, etc.: +3 days
   * - stage 4: mailchimp flow: +4 days
   * - stage 5: .........
   *
   *
   * Don't focus on this, it may still be possible i'll never need this.
   * A plan date/factor is more interesting for social media automation.
   */
  publishPlanDate: Date,
  /**
   * Multiplier of scheduled feature date. E.g. fill in 7 here, and it takes 3 weeks instead of 3 days for a feature to be released.
   */
  publishPlanFactor: number,

  /** Navigates to introStack if these are defined. Intro Stack is a flow through introscreens, with different params, based on these values */
  intro: {
    /** e.g. ['welcome', 'explanation1', 'explanation2', 'code', 'contact', 'letsgo'] */
    introApp: string[],
    /** e.g. ['welcome', 'explanation1', 'explanation2', 'email', 'download'] */
    introWeb: string[]
  },

  /**
   * if given, provides rest function to easily fetch things from there
   */
  RESTAPI: string,
  /**
   * if true, app will not show anything if no connection can be established
   */
  connectionRequired: true,

  /**
   * if given, wraps app in GraphQL Client
   */
  GraphQLAPI: string,

  /**
   * All other labels this app can use. All things defined here will be merged with Config based on which label the app user is using.
   *
   * Domain can be automatically chosen based on name
   */
  labels: Fundamentals[]
};
