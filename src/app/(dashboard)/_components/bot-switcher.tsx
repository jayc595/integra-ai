import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    isCollapsed: boolean
}

const BotSwitcher = ({
    isCollapsed
}: Props) => {
  return (
    <Select>
      <SelectTrigger
        className={cn(
            "flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
            isCollapsed &&
              "flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden"
          )}
        aria-label="Select bot"
      >
        <SelectValue placeholder="Select a bot">
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='bot1'>
            <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Vercel</title>
                    <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
                </svg>
              Bot 1
            </div>
        </SelectItem>
        <SelectItem value='bot2'>Bot 2</SelectItem>
        <SelectItem value='bot3'>Bot 3</SelectItem>
        <SelectItem value='bot4'>Bot 4</SelectItem>
        <Separator/>
        <SelectItem value='new'>Create new Bot</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default BotSwitcher