// routes.ts
import { ComponentType } from 'react';
import { RouteProps } from 'react-router-dom';

// Import your page components
import HomePage from './app/Views/Home';

// Add other page components as needed

type OmitComponentProp = Omit<RouteProps, 'component'>;

interface RouteConfig extends OmitComponentProp {
  path: string;
  component: ComponentType<any>;
}

const routes: RouteConfig[] = [
  { path: '/', component: HomePage },  
  // Add other routes here
];

export default routes;
