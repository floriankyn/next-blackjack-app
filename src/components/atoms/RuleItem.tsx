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
    <ul className="list bg-base-100 rounded-box shadow-md w-[700px] my-2">
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
          <button className="btn btn-square btn-ghost">
            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
          </button>
          <button className="btn btn-square btn-ghost">
            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
          </button>
        </div>
      </li>      
    </ul>
  )
}

export default RuleItem;
