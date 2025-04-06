"use client";
import React, { FC, useState, useEffect} from 'react'
import LanderingDialog from '@/components/atoms/LanderingDialog'
import { Button } from '@/components/ui/button';

interface BalanceProps {
  userBalance: number;
  setUserBalance: React.Dispatch<React.SetStateAction<number>>;
  userBankBalance: number;
  setUserBankBalance: React.Dispatch<React.SetStateAction<number>>;
}

export const Balance: FC<BalanceProps> = ({
  userBalance,
  setUserBalance,
  userBankBalance,
  setUserBankBalance,
}) => {
  const [isAddingMoneyOpen, setIsAddingMoneyOpen] = useState<boolean>(false);

  const createMoney = () => {
    setIsAddingMoneyOpen(true);
  }

  return (
    <>
      <LanderingDialog 
        open={isAddingMoneyOpen}
        setOpen={setIsAddingMoneyOpen} 
        userBalance={userBalance}
        setUserBalance={setUserBalance}
      />

      <div className="stats bg-base-100 border border-base-300">
        <div className="stat">
          <div className="stat-title">Available at hand:</div>
          <div className="stat-value">${userBalance}</div>
          <div className="stat-actions">
            <button className="btn btn-xs btn-success">Add funds</button>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">Available at Bank</div>
          <div className="stat-value">${userBankBalance}</div>
          <div className="stat-actions">
            <button className="btn btn-xs" onClick={createMoney} >
              Deposit
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Balance;