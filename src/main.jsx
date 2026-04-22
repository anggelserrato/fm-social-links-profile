import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SocialLinksProfile from './components/SocialLinksProfile.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SocialLinksProfile />
  </StrictMode>
);
