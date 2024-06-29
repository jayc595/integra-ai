"use client"

import React from 'react';
import { Sidebar } from './_components/sidebar';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import BotSwitcher from './_components/bot-switcher';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import Nav from './_components/nav';
import { Inbox } from 'lucide-react';
import { BOTTOM_SIDE_MENU, TOP_SIDE_MENU } from '@/constants/menu';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout = ({
    children,
}: DashboardLayoutProps) => {
    const defaultCollapsed = false; 
    const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)

    return (
        <div className='h-screen'>
            <ResizablePanelGroup
      direction="horizontal"
      className="h-full border"
    >
      <ResizablePanel 
        defaultSize={15} 
        minSize={15} 
        maxSize={20} 
        collapsible={true}
        onCollapse={() => {
          setIsCollapsed(true)
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`
        }}
        onExpand={() => {
          setIsCollapsed(false)
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)}`
        }}
        className={cn(
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out"
          )}
        >
        <div
            className={cn(
              "flex h-[52px] items-center justify-center",
              isCollapsed ? "h-[52px]" : "px-2"
            )}
          >
            <BotSwitcher isCollapsed={isCollapsed}/>
        </div>
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={
              TOP_SIDE_MENU
            }
          >
          </Nav>
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={
              BOTTOM_SIDE_MENU
            }
          >
          </Nav>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={85}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
        </div>
        
        
    );
}

export default DashboardLayout;
