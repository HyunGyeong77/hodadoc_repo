import {Metadata} from 'next';
import Hero from '@sections/Hero';
import Search from '@sections/Search';
import HealthCheckup from '@sections/HealthCheckup';
import HealthInfo from '@sections/HealthInfo';
import Anno from '@sections/Anno';
import Vaccin from '@sections/Vaccin';
import Footer from '@layout/Footer';

export const metadata: Metadata = {
  title: "HODADOC",
  description: "hodadoc website",
};

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Search />
        <HealthCheckup />
        <HealthInfo />
        <Anno />
        <Vaccin />
      </main>
      <Footer />
    </div>
  );
}
