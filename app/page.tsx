import { MainPage } from '@/components/component/main-page'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between md:p-16 lg:p-16 bg-gray-200">
     <MainPage />
    </main>
  )
}
