import AutoReply from '@/components/landingPage/autoReply';
import Broadcast from '@/components/landingPage/broadcast';
import Campaign from '@/components/landingPage/campaign';
import GetStarted from '@/components/landingPage/getStarted';
import Opportunity from '@/components/landingPage/opportunity';

export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      <GetStarted />
      <Broadcast />
      <Campaign />
      <AutoReply />
      <Opportunity />
      {/* 
      <section id="campaign">Campaign</section>
      <section id="auto-reply">Auto Reply</section>
      <section id="opportunity">Opportunity</section>
      <section id="pricing">Pricing</section>
      <section id="faq">FAQ</section>
      <section id="contact-us">Contact Us</section> */}
    </main>
  );
}
