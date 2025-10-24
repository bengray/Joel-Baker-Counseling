module.exports = {
  name: "Joel Baker Counseling",
  email: "info@joelbakercounseling.com",
  phoneForTel: "678-948-8057",
  phoneFormatted: "(678) 948-8057",
  address: {
    lineOne: "Midtown Psychotherapy Associates",
    lineTwo: "199 Armour Drive NE Suite E",
    city: "Atlanta",
    state: "GA",
    zip: "30324",
    country: "US",
    mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
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
