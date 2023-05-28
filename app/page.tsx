import { Metadata } from 'next';
import Home from './components/home/Home';

export const metadata: Metadata = {
  title: 'Matt Thomas | Portfolio',
  description: 'Welcome to my portfolio! Check out my projects and contact me if you\'re interested in working together.',
};

export default async function Index() {
  return (
    <Home />
  );
}