// src/router.ts
import { createRouter, createRootRoute, createRoute } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';
import App from '../App';
import Volunteers from '../pages/volunteer/Volunteers';
import Home from '../pages/Home';
import AdminLogin from '../pages/admin/AdminLogin';
import VolunteersSubDashboard from '../pages/volunteer/VolunteersSubDashboard';
import DonacionesPage from '../pages/donaciones/Donaciones.page';
import FormularioDonacion from '../components/Donation/FormularioDonacion';
import ConocenosSection from '../components/Landing/Conocenos';

// Lazy-loaded admin Pages with Suspense boundaries
const AdminDashboard = lazy(() => import('../pages/admin/AdminDashboard'));
const VolunteerOptionsPage = lazy(() => import('../pages/volunteer/VolunteerOptionsPage'));
const VolunteerFormsPage = lazy(() => import('../pages/volunteer/VolunteerFormsPage'));
const DonationForms = lazy(() => import('../pages/admin/DonationForms'));
const AttendancePage = lazy(() => import('../pages/admin/AttendancePage'));

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

const donationsAdminRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: 'donations',
  component: () => (
    <Suspense fallback={<div style={{color:'red',fontSize:'2rem',textAlign:'center'}}>Loading DonationForms...</div>}>
      <DonationForms />
    </Suspense>
  ),
});

const attendanceAdminRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: 'attendance',
  component: () => (
    <Suspense fallback={<div style={{color:'red',fontSize:'2rem',textAlign:'center'}}>Loading AttendancePage...</div>}>
      <AttendancePage />
    </Suspense>
  ),
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
    ]),
    donationsAdminRoute,
    attendanceAdminRoute
  ])
]);

// Singleton router instance
let router: any;

if (!router) {
  router = createRouter({
    routeTree,
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: ({ error }) => (
      <div className="text-center p-4">
        <h1 className="text-2xl font-bold text-red-600">Error</h1>
        <p className="text-gray-700">{error.message}</p>
      </div>
    ),
    defaultNotFoundComponent: () => (
      <div className="text-center p-4">
        <h1 className="text-2xl font-bold text-red-600">Page Not Found</h1>
        <p className="text-gray-700">The page you're looking for doesn't exist.</p>
      </div>
    )
  });
}

export { router };

// Type safety declaration
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}