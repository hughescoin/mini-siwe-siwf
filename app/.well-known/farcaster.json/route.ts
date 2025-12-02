import { withValidManifest } from "@coinbase/onchainkit/minikit";
import { minikitConfig } from "../../../minikit.config";

export async function GET() {
  // Return the full config including baseBuilder
  // withValidManifest may filter out baseBuilder, so we merge it back in
  const manifest = withValidManifest(minikitConfig);
  return Response.json({
    ...manifest,
    baseBuilder: minikitConfig.baseBuilder,
  });
}
