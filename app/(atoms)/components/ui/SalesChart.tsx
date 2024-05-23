'use client'

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

const SalesChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        className='w-full h-full'
        margin={{ top: 5, right: 20, bottom: 4, left: 0 }}
      >
        <CartesianGrid stroke='#ccc' strokeDasharray="5 5" />
        <XAxis />
        <YAxis />
        <Tooltip />
      </LineChart>

    </ResponsiveContainer>
  )
}

export default SalesChart
