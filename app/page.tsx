import { CashbackSection } from "@/components/CashbackSection";
import { FaqSection } from "@/components/FaqSection";
import { HeroSection } from "@/components/HeroSection";
import { NetworkSection } from "@/components/NetworkSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StackPanel, StackScroll } from "@/components/StackScroll";
import { StarField } from "@/components/StarField";
import { SpendFeedSection } from "@/components/SpendFeedSection";
import { TapInSection } from "@/components/TapInSection";

export default function Home() {
  return (
    <div id="top" className="space-bg relative flex flex-1 flex-col">
      <StarField />
      <SiteHeader />

      <main className="relative z-10 flex-1">
        <HeroSection />
        <StackScroll>
          <StackPanel layer={1}>
            <SpendFeedSection />
          </StackPanel>
          <StackPanel layer={2} hold>
            <NetworkSection />
          </StackPanel>
          <StackPanel layer={3}>
            <TapInSection />
          </StackPanel>
        </StackScroll>
        <CashbackSection />
        <FaqSection />
      </main>

      <SiteFooter />
    </div>
  );
}
