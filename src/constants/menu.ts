import { ConversationsIcon } from "@/icons/conversations-icon";
import { Blocks, BlocksIcon, CodeXml, Home, Icon, Inbox, LogOut, LucideIcon, MessageCircleMore, Plus, Presentation, Settings, SettingsIcon } from "lucide-react";

type SIDE_MENU_PROPS = {
    title: string
    label?: string
    icon: LucideIcon
    variant: "default" | "ghost"
}

export const TOP_SIDE_MENU: SIDE_MENU_PROPS[] = [
    {
        title: 'Conversations',
        label: '128',
        icon: Inbox,
        variant: 'default'
    },
    {
        title: 'Integrations',
        icon: BlocksIcon,
        variant: 'ghost'
    },
    {
        title: 'Settings',
        icon: SettingsIcon,
        variant: 'ghost'
    }
]

export const BOTTOM_SIDE_MENU: SIDE_MENU_PROPS[] = [
    {
        title: 'Code Fragment',
        icon: CodeXml,
        variant: 'ghost'
    }
]
