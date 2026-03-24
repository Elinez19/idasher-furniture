import { Hero } from "@/components/sections/Hero";
import { ShopByRoom } from "@/components/sections/ShopByRoom";
import { FeatureOne } from "@/components/sections/FeatureOne";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { DesignPlan } from "@/components/sections/DesignPlan";
import { TopSellers } from "@/components/sections/TopSellers";
import { SocialProof } from "@/components/sections/SocialProof";

export default function Home() {
  return (
    <>
      <Hero />
      <ShopByRoom />
      <FeatureOne />
      <FeatureGrid />
      <DesignPlan />
      <TopSellers />
      <SocialProof />
    </>
  );
}
