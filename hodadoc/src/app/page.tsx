import {Metadata} from 'next';
import MainSections from '@layout/pages/MainPages';

export const metadata: Metadata = {
  title: "HODADOC",
  description: "hodadoc website",
};

export default function Home() {
  return (
    <MainSections />
  );
}
