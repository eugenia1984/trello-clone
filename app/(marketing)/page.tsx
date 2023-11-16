import Link from 'next/link'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
import { Medal } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const headingFont = localFont({ src: '../../public/fonts/font.woff2' })

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const MarketingPage = () => {
  return (
    <section className="flex items-center justify-center flex-col">
      <section
        className={
          cn("flex items-center justify-center flex-col mb-2",
            headingFont.className
          ) }
      >
        <div className="mb-6 flex items-center border shadow-sm p-4  bg-amber-100 text-amber-700 rounded-full text-amber-700 uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task managment
        </div>
        <h1 className="text-3xl md:text-5xl text-center text-neutral-800 mb-6 px-4">
          Taskify helps team move
        </h1>
        <div className="text-3l md:text-5xl bg-gradient-to-r from-fuchsia-800 to-pink-500 text-white px-4 py-2 rounded-md mb-4 w-fit">
          work forward.
        </div>
        <p
          className={
            cn("text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto px-4",
              textFont.className
            ) }
        >
          Colaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique - accomplish it all with Taskify.
        </p>
      </section>
      <Button className="mt-6" size="lg" asChild>
        <Link href='/sign-up' aria-label='Sign up button'>
          Get Taskify for free
        </Link>
      </Button>

    </section>
  )
}

export default MarketingPage