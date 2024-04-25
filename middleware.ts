import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
}); // aquí faltan cosas: publicRoutes, ignoredRoutes

// config. general de auth / authorization
export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}

// 1. /((?!.*\\..*|_next).*): ignore todos los paths o recursos que sean estáticos: imágenes, scripts, css, etc...
// 2. / : ruta posterior a la autenticacion del usuario para acceder a la app: automáticamente protegida/privada
// 3. /(api|trpc)(.*): protege todas las ruta que comiencen con api o trpc. Ser accesibles solo los usuarios que hayan iniciado sesión