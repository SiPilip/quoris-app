import AutoReply from '@/components/landingPage/autoReply';
import Broadcast from '@/components/landingPage/broadcast';
import Campaign from '@/components/landingPage/campaign';
import GetStarted from '@/components/landingPage/getStarted';
import Opportunity from '@/components/landingPage/opportunity';
import OurPricing from '@/components/landingPage/ourPricing';

export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      <GetStarted />
      <Broadcast />
      <Campaign />
      <AutoReply />
      <Opportunity />
      <OurPricing />
    </main>
  );
}
