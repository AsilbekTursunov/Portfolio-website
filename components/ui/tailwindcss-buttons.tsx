'use client'
import React from 'react'
// import { IconClipboard } from "@tabler/icons-react";
import { cn } from '@/lib/utils'

export const ButtonsCard = ({
  children,
  className,
  onClick,
  href,
}: {
  children?: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        '  w-full  rounded-xl  group/btn overflow-hidden relative flex items-center justify-center',
        className
      )}
    >
      <div className='absolute inset-0 dark:bg-dot-white/[0.1] bg-dot-black/[0.1]' />
      <div className='relative z-40'>{children}</div>
    </a>
  )
}
