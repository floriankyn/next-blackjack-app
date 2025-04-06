import { LucideBookOpenText } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react'

interface RuleItemProps {
  rulePosition: number;
  ruleDescription: string;
}

export const RuleItem: FC<RuleItemProps> = ({
  ruleDescription,
  rulePosition,
}) => {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md min-w-[200px] max-w-[700px] my-2 hover:scale-105 ease-in-out duration-300 ">
      <li className="flex justify-between items-center p-4">
        <div className='flex justify-start items-center'> 
          <div className="text-4xl font-thin opacity-30 tabular-nums">
            {rulePosition}
          </div>

          <p className="text-start text-xs pl-5 w-[550px]">
            {ruleDescription}
          </p>
  
        </div>

        <div>
          <Link href="https://en.wikipedia.org/wiki/Blackjack" className="btn btn-square btn-ghost">
            <LucideBookOpenText />
          </Link>
        </div>
      </li>      
    </ul>
  )
}

export default RuleItem;
