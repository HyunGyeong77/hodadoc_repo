import {Metadata} from 'next';
import Hero from '@sections/Hero';
import Search from '@sections/Search';

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
      </main>
      <footer>

      </footer>
    </div>
  );
}
