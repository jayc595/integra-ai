import { Blocks, BlocksIcon, CodeXml, Home, Icon, LogOut, MessageCircleMore, Plus, Presentation, Settings } from "lucide-react";
// import { List } from "./sidebar/list";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Hint } from "./hint";
import BotIcon from "./bot-icon";
import Image from "next/image";


export const Sidebar = () => {
    return (
        <aside className="fixed z-[1] left-0 bg-gray-100 h-full w-[60px] flex flex-col p-3 gap-y-4 text-white">
            {/* <Icon/> */}
            <Image
                    src="/images/icon.png"
                    alt="Integra AI Logo"
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto'
                    }}
                    width={100}
                    height={100}
                />
            <Separator/>
            <div className="ml-2 gap-y-1">
                <Hint label="Conversations" side="right" align="start" sideOffset={18}>
                    <MessageCircleMore className="text-black mt-5"/>
                </Hint>
                <Hint label="Integrations" side="right" align="start" sideOffset={18}>
                    <BlocksIcon className="text-black mt-5"/>
                </Hint>
                <Hint label="Settings" side="right" align="start" sideOffset={18}>
                    <Settings className="text-black mt-5"/>
                </Hint>
                <Separator className="text-black"/>
                <Hint label="Add new bot" side="right" align="start" sideOffset={18}>
                    <Plus className="text-black mt-7 border rounded-full border-black/35" />
                </Hint>
                <BotIcon domain="test" botName="test" botIcon="test"/>
            </div>
            <div className="flex-grow">
                {/* Empty space to push content to the bottom */}
            </div>
            <div className="aspect-square">
                <Hint label="Logout" side="right" align="start" sideOffset={18}>
                    <Link href={"/logout"}>
                        <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
                            <CodeXml className="text-black"/>
                        </button>
                    </Link>
                </Hint>
            </div>
            <Separator/>
            <div className="aspect-square">
                <Hint label="Logout" side="right" align="start" sideOffset={18}>
                    <Link href={"/logout"}>
                        <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
                            <LogOut className="text-black"/>
                        </button>
                    </Link>
                </Hint>
            </div>
        </aside>
    );
};
