import {
  LayoutDashboard,
  Shapes,
  ShoppingBag,
  Tag,
  UsersRound,
  BookCheck,
  Fingerprint,
  ScanFace
  
} from 'lucide-react'

export const navLinks = [
  {
    url: '/',
    icon: <LayoutDashboard />,
    label: 'Dashboard',
  },
  {
    url: '/collections',
    icon: <Shapes />,
    label: 'Artefactos',
  },
  {
    url: '/rekognition',
    icon: <ScanFace />,
    label: 'Reconocimiento Facial',
  },
  {
    url: '/products',
    icon: <BookCheck  />,
    label: 'Ingresos',
  },
  {
    url: '/orders',
    icon: <Fingerprint />,
    label: 'Imputados',
  },
  {
    url: '/customers',
    icon: <UsersRound />,
    label: 'Usuarios',
  },
]
