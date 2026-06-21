import {
  SquareKanban,
  Gauge,
  Mail,
  ListTodo,
  ClipboardClock,
  BellRing,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenu,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <SquareKanban className="size-5 shrink-0" />
              <span className="font-bold">Client CRM</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>CRM Actions</SidebarGroupLabel>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Gauge className="size-5 shrink-0" />
              <span>Dashboard</span>
            </SidebarMenuButton>
            <SidebarMenuButton>
              <BellRing className="size-5 shrink-0" />
              <span>Notifications</span>
            </SidebarMenuButton>
            <SidebarMenuButton>
              <Mail className="size-5 shrink-0" />
              <span>Client Requests</span>
            </SidebarMenuButton>
            <SidebarMenuButton>
              <ListTodo className="size-5 shrink-0" />
              <span>Todo</span>
            </SidebarMenuButton>
            <SidebarMenuButton>
              <ClipboardClock className="size-5 shrink-0" />
              <span>Appointments</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
