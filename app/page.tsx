import { Metadata } from 'next';
import Home from './components/home/Home';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

export default async function Index() {
  return (
    <Home />
  );
}