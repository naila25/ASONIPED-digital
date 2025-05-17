// src/router.ts
import { createRouter, createRootRoute, createRoute } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';
import App from '../App';
import Volunteers from '../Pages/volunteer/Volunteers';
import Home from '../Pages/Home';
import AdminLogin from '../Pages/admin/AdminLogin';
import VolunteersSubDashboard from '../Pages/volunteer/VolunteersSubDashboard';
import DonacionesPage from '../Pages/donaciones/Donaciones.page';
import FormularioDonacion from '../components/Donation/FormularioDonacion';
import ConocenosSection from '../components/Landing/Conocenos';

// Lazy-loaded admin pages with Suspense boundaries
const AdminDashboard = lazy(() => import('../Pages/admin/AdminDashboard'));
const VolunteerOptionsPage = lazy(() => import('../Pages/volunteer/VolunteerOptionsPage'));
const VolunteerFormsPage = lazy(() => import('../Pages/volunteer/VolunteerFormsPage'));

// Root route - SINGLE SOURCE OF TRUTH
const rootRoute = createRootRoute({
  component: App,
});

// Index route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

// Public routes
const volunteersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'volunteers',
  component: Volunteers,
});

const adminLoginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'admin-login',
  component: AdminLogin,
});

// Donation routes
const donacionesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'donaciones',
  component: DonacionesPage,
});

const conocenosRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'conocenos',
  component: ConocenosSection,
});

const formularioDonacionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'donaciones/formulario',
  component: FormularioDonacion,
});

// Admin routes with lazy loading and authentication check
const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'admin',
  component: () => (
    <Suspense fallback={<div style={{color:'red',fontSize:'2rem',textAlign:'center'}}>Loading AdminDashboard...</div>}>
      <AdminDashboard />
    </Suspense>
  ),
});

// Admin sub-routes
const volunteersAdminRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: 'volunteers',
  component: VolunteersSubDashboard,
});

const volunteerOptionsRoute = createRoute({
  getParentRoute: () => volunteersAdminRoute,
  path: 'options',
  component: () => (
    <Suspense fallback={<div style={{color:'red',fontSize:'2rem',textAlign:'center'}}>Loading VolunteerOptionsPage...</div>}>
      <VolunteerOptionsPage />
    </Suspense>
  ),
});

const volunteerFormsRoute = createRoute({
  getParentRoute: () => volunteersAdminRoute,
  path: 'forms',
  component: () => (
    <Suspense fallback={<div style={{color:'red',fontSize:'2rem',textAlign:'center'}}>Loading VolunteerFormsPage...</div>}>
      <VolunteerFormsPage />
    </Suspense>
  ),
});

// Route tree construction
const routeTree = rootRoute.addChildren([
  indexRoute,
  volunteersRoute,
  adminLoginRoute,
  donacionesRoute,
  conocenosRoute,
  formularioDonacionRoute,
  adminRoute.addChildren([
    volunteersAdminRoute.addChildren([
      volunteerOptionsRoute,
      volunteerFormsRoute
    ])
  ])
]);

// Singleton router instance
let router: any;

if (!router) {
  router = createRouter({
    routeTree,
    // Optional: Add default preloading/staleTime configurations
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0
  });
}

export { router };

// Type safety declaration
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}