import AutoReply from '@/components/landingPage/autoReply';
import Broadcast from '@/components/landingPage/broadcast';
import Campaign from '@/components/landingPage/campaign';
import Footer from '@/components/landingPage/footer';
import GetStarted from '@/components/landingPage/getStarted';
import NavSide from '@/components/landingPage/navSide';
import Opportunity from '@/components/landingPage/opportunity';
import OurPricing from '@/components/landingPage/ourPricing';

export default function Home() {
  return (
    <main className="relative flex flex-col justify-center">
      <NavSide />
      <GetStarted />
      <Broadcast />
      <Campaign />
      <AutoReply />
      <Opportunity />
      <OurPricing />
      <Footer />
    </main>
  );
}
