const ROOT_URL = "siwe-mini.vercel.app";

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {
    "accountAssociation": {
      "header": "eyJmaWQiOjE3MzE4LCJ0eXBlIjoiYXV0aCIsImtleSI6IjB4QzZDODNGMzE3NDYxZGQxZjVGZjY3QjIxNzcyZmY2NDIyNkQ3M2IxNiJ9",
      "payload": "eyJkb21haW4iOiJzaXdlLW1pbmkudmVyY2VsLmFwcCJ9",
      "signature": "ss/R3tDWzNGrgECfFn1Yd+j/ighMNS8N6JTIW12cnehe6lW8znRO3mo+yMOijWLzizVO4Yaz1JuY2SV0+1fFwBw="
    },
  miniapp: {
    version: "1",
    name: "NotCubey", 
    subtitle: "Not Your AI Ad Companion", 
    description: "Ads",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `https://api.neynar.com/f/app/3c274018-6402-4a47-96ea-1fea72afc408/event`,
    primaryCategory: "social",
    tags: ["marketing", "ads", "quickstart", "waitlist"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`, 
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
    noindex: false,
  },
  baseBuilder: {
    "allowedAddresses": ["0x5993B8F560E17E438310c76BCac1Af3E6DA2A58A"]
  }

} as const;




