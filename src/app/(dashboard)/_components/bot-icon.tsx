import { User } from 'lucide-react'
import React from 'react'
import { Hint } from './hint'

type Props = {
    domain: string,
    botName: string,
    botIcon: string,
}

const BotIcon = ({
    domain,
    botName,
    botIcon
}: Props) => {
  return (
    <div>
        <Hint label={botName} side="right" align="start" sideOffset={18}>
            <User className="text-black mt-3" />
        </Hint>
    </div>
  )
}

export default BotIcon;