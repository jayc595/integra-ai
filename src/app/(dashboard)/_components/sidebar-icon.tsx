import React from 'react'
import { Hint } from './hint'
import { Link, LogOut, LucideIcon } from 'lucide-react'

type Props = {
    name: string,
    icon: JSX.Element,
    path: string,
}

const SideBarIcon = ({
    name,
    icon,
    path,
}: Props) => {
  return (
    <div className="aspect-square">
                <Hint label={name} side="right" align="start" sideOffset={18}>
                    <Link href={path}>
                        <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
                            <LogOut className="text-black"/>
                        </button>
                    </Link>
                </Hint>
            </div>
  )
}