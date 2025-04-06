"use client";
import React, { useEffect, useState } from 'react'
import { deck } from '@/lib/constants';
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Balance from '@/components/molecules/Balance';

export default function Blackjack() {
  const [userBalance, setUserBalance] = useState<number>(0);
  const [userBankBalance, setUserBankBalanse] = useState<number>(0);
  const [totalSpent, setTotalSpent] = useState<number>(0); 


  return (
    <main className='w-full h-full'>
      <div className='w-full h-[200px] flex justify-between items-center' >
        
        <div>
          <Balance 
            userBalance={userBalance}
            setUserBalance={setUserBalance}
            userBankBalance={userBankBalance}
            setUserBankBalanse={setUserBankBalanse} 
          />
        </div>


      </div>


      <div className='w-full h-[calc(100vh-250px)] bg-black flex justify-center items-center'>
        <h1 className="text-8xl font-bold text-white text-center">
          Welcome to <br /> Blackjack!
        </h1>
      </div>
    </main>
  )
}
