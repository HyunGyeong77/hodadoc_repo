import {Metadata} from 'next';
import Hero from '@sections/Hero';
import Search from '@sections/Search';
import HealthCheckup from '@sections/HealthCheckup';
import HealthInfo from '@sections/HealthInfo';

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
      </main>
      <footer>

      </footer>
    </div>
  );
}
