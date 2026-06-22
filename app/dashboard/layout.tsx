import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "../components/AppSidebar";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <SidebarTrigger />
        <div className="  flex  items-center w-[90%] mr-auto ml-auto">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
};

export default layout;
