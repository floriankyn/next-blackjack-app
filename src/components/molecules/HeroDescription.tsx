import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function HeroDescription() {
  return (
    <Card className='w-[700px]'>
      <CardHeader>
        <CardTitle className='text-2xl font-bold'>What is Blackjack?</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='border border-green-500 rounded-md p-4'>
          This is a simple blackjack game built with <strong>Next.js</strong> and <strong>TypeScript</strong>.
          The <strong>goal</strong> of the game is to get <strong>as close to 21</strong> as possible without
          going over. You will be playing against the dealer.
        </p>
      </CardContent>
      <CardFooter>
       <p className='border border-red-500 rounded-md p-4'>
          Your odds of winning if playing against the house are <a className='text-red-500'>42.22%</a><br />
          If playing perfect basic strategy, your odds of winning are <a className='text-red-500'>49.5%%</a><br />
          If playing perfect basic strategy and card counting, your odds of winning are <a className='text-red-500'>51.5%</a> against the house.
        </p>
      </CardFooter>
    </Card>
  )
}
