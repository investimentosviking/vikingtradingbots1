import { useState } from 'react';
import { ExternalLink, TrendingUp, Shield } from 'lucide-react';

const LivePerformance = () => {
  const [activeTab, setActiveTab] = useState<'btcusd' | 'dax'>('btcusd');

  return (
    <section id="live-performance" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-primary/10 text-primary font-montserrat text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
            Live Performance
          </span>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground tracking-[-0.02em] mb-4">
            Verified Live Track Record
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-sm">
            Audited public results via MyFxBook — unfiltered, unedited.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab('btcusd')}
            className={`font-montserrat font-bold text-sm px-6 py-3 rounded-xl transition-all ${
              activeTab === 'btcusd'
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                : 'bg-card border border-foreground/10 text-muted hover:border-primary/30'
            }`}
          >
            BTC/USD
          </button>
          <div className="flex flex-col items-center">
            <button
              disabled
              className="font-montserrat font-bold text-sm px-6 py-3 rounded-xl bg-card border border-foreground/10 text-muted/50 cursor-not-allowed opacity-50"
            >
              DAX
            </button>
            <span className="text-[10px] font-montserrat text-muted/60 mt-1 uppercase tracking-wider">
              Coming Soon
            </span>
          </div>
        </div>

        {/* Card */}
        {activeTab === 'btcusd' && (
          <a
            href="https://www.myfxbook.com/portfolio/viking-trading-bots/11996360"
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-lg mx-auto rounded-xl border border-foreground/10 bg-card p-8 hover:border-primary/40 transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-lg text-foreground">Viking Alpha BTC/USD</h3>
                <div className="flex items-center gap-1.5 text-xs text-muted">
                  <Shield className="w-3 h-3 text-primary" />
                  Verified by MyFxBook
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 font-montserrat font-bold text-sm text-primary group-hover:gap-3 transition-all">
              View Live Results
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>
        )}
      </div>
    </section>
  );
};

export default LivePerformance;
