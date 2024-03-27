import React from 'react';

export const Footer: React.FC = () => (
  <div className="footer">
    <a rel="me" href="https://wears.tigerpajamas.com/@phil">
      <img src="/img/mastodon.svg" alt="Mastodon" height="30" width="30" />
    </a>
    <a href="/rss.xml">
      <img src="/img/rss-white.svg" alt="RSS Feed" height="30" width="30" />
    </a>
  </div>
);