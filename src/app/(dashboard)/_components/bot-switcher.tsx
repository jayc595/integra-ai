import { Button } from '@/components/ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    isCollapsed: boolean
    bots: {
        label: string
        icon: React.ReactNode
    }[]
}

const BotSwitcher = ({
    isCollapsed,
    bots
}: Props) => {
    const [selectedBot, setSelectedBot] = React.useState<string>(
        bots[0].label
      )
  return (
    <Select defaultValue={selectedBot} onValueChange={setSelectedBot}>
      <SelectTrigger
        className={cn(
            "flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
            isCollapsed &&
              "flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden"
          )}
        aria-label="Select bot"
      >
        <SelectValue placeholder="Select an account">
          {bots.find((bot) => bot.label === selectedBot)?.icon}
          <span className={cn("ml-2", isCollapsed && "hidden")}>
            {
              bots.find((bot) => bot.label === selectedBot)
                ?.label
            }
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {bots.map((bot) => (
            <SelectItem key={bot.label} value={bot.label}>
                <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
                    {bot.icon}
                    {bot.label}
                </div>
            </SelectItem>
            ))}
        <Separator/>
        <Drawer>
          <DrawerTrigger asChild>
            <Button className='w-full' variant='select' value="new-bot">
                  <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
                      <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="10" y="4" width="4" height="16" fill="black"/>
                          <rect x="4" y="10" width="16" height="4" fill="black"/>
                      </svg>
                      Create new Bot
                  </div>
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Create New Bot</DrawerTitle>
                <DrawerDescription>Shape your Bot's identity</DrawerDescription>
              </DrawerHeader>
              <Select>
                
              </Select>
              <Input placeholder="Label your bot"/>
              <Input placeholder="Name your bot"/>
              <Textarea></Textarea>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
          </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>    
      </SelectContent>
    </Select>
  )
}

export default BotSwitcher