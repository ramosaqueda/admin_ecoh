import { CircleDollarSign, ShoppingBag, UserRound, Siren} from 'lucide-react'
import { Separator } from '@/components/ui/Separator'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/(particules)/Card'
import SalesChart from '@/components/ui/SalesChart'

export default function Home() {
  return (
    <div className="px-8 py-10">
      <p className="text-heading2-bold">Dashboard</p>
      <Separator className="bg-grey-1 my-5" />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        <Card>
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>Total de Causas Ingresadas</CardTitle>
            <Siren className="max-sm:hidden" />
          </CardHeader>
          <CardContent>
            <p className="text-body-bold"> {40}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>Total Causas Legadas</CardTitle>
            <ShoppingBag className="max-sm:hidden" />
          </CardHeader>
          <CardContent>
            <p className="text-body-bold">{7}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>Sujetos Con Medidas Cautelares</CardTitle>
            <UserRound className="max-sm:hidden" />
          </CardHeader>
          <CardContent>
            <p className="text-body-bold">{6}</p>
          </CardContent>
        </Card>
      </div>

      <Card className='mt-10'>
        <CardHeader>
          <CardTitle>Ingresos Mensuales</CardTitle>
        </CardHeader>
        <CardContent>
          <SalesChart />
        </CardContent>
      </Card>
    </div>
  )
}
