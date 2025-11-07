module.exports = {
  name: "Joel Baker Counseling",
  email: "info@joelbakercounseling.com",
  phoneForTel: "678-948-8057",
  phoneFormatted: "(678) 948-8057",
  address: {
    lineOne: "At Midtown Psychotherapy Associates",
    lineTwo: "199 Armour Drive NE Suite E",
    city: "Atlanta",
    state: "GA",
    zip: "30324",
    country: "US",
    googleMapLink: "https://maps.app.goo.gl/kwkqBUiMMPY9Lkp76",
    appleMapLink:
      "https://maps.apple.com/directions?destination=199%20Armour%20Dr%20NE%2C%20199%20Armour%20Dr%20NE%2C%20Atlanta%2C%20GA%20%2030324%2C%20United%20States&mode=driving",
  },
  //   socials: {
  //     facebook: "https://www.facebook.com/",
  //     instagram: "https://www.instagram.com/",
  //   },
  //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
  domain: "https://www.joelbakercounseling.com",
  // Passing the isProduction variable for use in HTML templates
  isProduction: process.env.ELEVENTY_ENV === "PROD",
};
