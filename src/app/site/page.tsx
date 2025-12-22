import { pricingCards } from '@/lib/constants'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import clsx from 'clsx'
import { Check } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className=''>
      <section className='h-full w-full pt-36 relative flex items-center justify-center flex-col'>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <p className='text-center'>Run your agency, in one place</p>
      <div className='bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative'>
        <h1 className='text-9xl font-bold text-center md:text-[250px]'>Buildo</h1>
      </div>
      <div className='flex justify-center items-center relative md:mt-[-70px]'>
        <Image 
        src={'/assets/preview.png'}
        alt='preview'
        width={1200}
        height={1200}
        className='rounded-tl-2xl rounded-tr-2xl border border-muted'
        ></Image>
        <div className='bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10'></div>
      </div>
      </section>
      <section className='flex justify-center items-center flex-col gap-4 md:mt-20'>
        <h2 className='text-4xl text-center'>Choose what fits you right</h2>
        <p className='text-muted-foreground text-center'>
          Our straight forward pricing plans are tailored to meet your needs. If {" you're"} not <br></br>
          ready to commit you can get started for free
        </p>
        <div className='flex gap-4 flex-wrap mt-6'>
          {pricingCards.map((card) => (
            <Card key={card.title}
            className={clsx('w-[300px] flex flex-col justify-between', {'border-2 border-primary': card.title === "Unlimited Saas"})}
            >
              <CardHeader>
                <CardTitle className={clsx('',{'text-muted-foreground':card.title !== 'Unlimited Saas'})}>
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <span className='text-4xl font-bold'>{card.price}</span>
                <span className='text-muted-foreground'>/m</span>
              </CardContent>
              <CardFooter className='flex flex-col items-start gap-4'>
                <div>
                  {
                    card.features.map((feat) => (
                      <div key={feat} className='flex gap-2 items-center'>
                        <Check className='text-muted-foreground'></Check>
                        <p>{feat}</p>
                      </div>
                    ))
                  }
                </div>
                <Link href={`/agency?plan=${card.priceId}`} className={clsx(
                  'w-full text-center bg-primary p-2 rounded-md',
                  {'!bg-muted-foreground': card.title !== 'Unlimited Saas'}
                )}>
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
