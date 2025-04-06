"use client";
import React, { useEffect, useState, FC } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface LanderingDialogProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  userBalance: number;
  setUserBalance: React.Dispatch<React.SetStateAction<number>>;
}

export const LanderingDialog: FC<LanderingDialogProps> = ({
  open,
  setOpen,
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>

  )
}

export default LanderingDialog;