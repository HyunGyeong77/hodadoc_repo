import {Metadata} from 'next';
import Hero from '@sections/Hero';

export const metadata: Metadata = {
  title: "HODADOC",
  description: "hodadoc website",
};

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
      </main>
      <footer>

      </footer>
    </div>
  );
}
