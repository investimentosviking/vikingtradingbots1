import { ExternalLink } from 'lucide-react';
import btcImg from '@/assets/viking-alpha-btcusd.png';
import daxImg from '@/assets/viking-alpha-dax.png';

const cards = [
  {
    name: 'Viking Alpha BTC/USD',
    description: 'Algorithmic trading on Bitcoin with precision entries.',
    image: btcImg,
    borderColor: '#a8ff3e',
    link: 'https://www.fxblue.com/users/Vikingtradingbots',
    enabled: true,
  },
  {
    name: 'Viking Alpha DAX',
    description: 'German index trading with optimized strategy.',
    image: daxImg,
    borderColor: '#4a7aff',
    link: '',
    enabled: false,
  },
  {
    name: 'Viking Alpha Gold',
    description: 'Precision trading on the world\'s safe haven asset.',
    image: btcImg,
    borderColor: '#FFD700',
    link: '',
    enabled: false,
  },
];

const LivePerformance = () => {
  return (
    <section id="live-performance" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-primary/10 text-primary font-montserrat text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
            Live Performance
          </span>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground tracki
