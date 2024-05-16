import { Separator } from '@/components/ui/separator'
import Card from '@/components/ui/Card'

export default function Home() {
  return (
    <div className="px-8 py-10">
      <p className="text-heading2-bold">Dashboard</p>
      <Separator className='bg-grey-1 my-5' />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        <Card />
      </div>
    </div>
  )
}
