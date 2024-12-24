<script setup lang="ts">
import {
  AudioWaveform,
  BadgeCheck,
  Bell,
  Box,
  ChartArea,
  ChevronRight,
  ChevronsUpDown,
  Circle,
  CircleAlert,
  Command,
  CreditCard,
  ExternalLink,
  GalleryVerticalEnd,
  IdCard,
  Key,
  LogOut,
  PanelBottom,
  Pen,
  PieChart,
  Plus,
  Settings2,
  Sparkles,
  SquareCheckBig,
  Table,
  UserRoundCheck,
} from 'lucide-vue-next'

interface NavItem {
  title: string
  url?: string | object
  target?: '_blank' | '_self' | '_parent' | '_top'
  icon?: any
  isActive?: boolean
  items?: NavItem[]
  disabled?: boolean
}

interface NavGroup {
  group: string
  navItems: NavItem[]
}

// This is sample
const user = {
  name: 'shadcn',
  email: 'm@example.com',
  avatar: '/avatars/01.png',
}
const teams = [
  {
    name: 'Acme Inc',
    logo: GalleryVerticalEnd,
    plan: 'Enterprise',
  },
  {
    name: 'Acme Corp.',
    logo: AudioWaveform,
    plan: 'Startup',
  },
  {
    name: 'Evil Corp.',
    logo: Command,
    plan: 'Free',
  },
]

const navMain: NavGroup[] = [
  {
    group: 'Dashboard',
    navItems: [
      {
        title: 'Overview',
        url: { name: 'index' },
        icon: ChartArea,
      },
      {
        title: 'Sales & Marketing',
        url: { name: 'dashboard-sales' },
        icon: PieChart,
      },
    ],
  },
  {
    group: 'Pages',
    navItems: [
      {
        title: 'Auth',
        icon: UserRoundCheck,
        isActive: true,
        items: [
          {
            title: 'Login',
            url: { name: 'login' },
          },
          {
            title: 'Forgot Password',
            url: { name: 'reset-password' },
          },
          {
            title: 'Error',
            url: '/error',
          },
          {
            title: 'Access Denied',
            url: '/error',
          },
        ],
      },
      {
        title: 'CRUD',
        url: '#',
        icon: Pen,
      },
      {
        title: 'Not Found',
        url: '/404',
        icon: Circle,
      },
      {
        title: 'Empty',
        url: '/empty',
        icon: CircleAlert,
      },
    ],
  },
  {
    group: 'Settings',
    navItems: [
      {
        title: 'General',
        url: '#',
        icon: Settings2,
      },
      {
        title: 'Security',
        url: '#',
        icon: Key,
        disabled: true,
      },
    ],
  },
  {
    group: 'UI Components',
    navItems: [
      {
        title: 'Form Layout',
        url: '#',
        icon: IdCard,
      },
      {
        title: 'Input',
        url: '#',
        icon: SquareCheckBig,
      },
      {
        title: 'Button',
        url: '#',
        icon: Box,
      },
      {
        title: 'Table',
        url: '#',
        icon: Table,
      },
      {
        title: 'Card',
        url: '#',
        icon: PanelBottom,
      },
      {
        title: 'More',
        url: 'https://www.shadcn-vue.com/docs/components/accordion.html',
        target: '_blank',
        icon: ExternalLink,
      },
    ],
  },
]

const activeTeam = ref(teams[0])

function setActiveTeam(team: (typeof teams)[number]) {
  activeTeam.value = team
}
</script>

<template>
  <SidebarProvider>
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <SidebarMenuButton
                  size="lg"
                  class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <div
                    class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
                  >
                    <component :is="activeTeam.logo" class="size-4" />
                  </div>
                  <div class="grid flex-1 text-left text-sm leading-tight">
                    <span class="truncate font-semibold">{{
                      activeTeam.name
                    }}</span>
                    <span class="truncate text-xs">{{ activeTeam.plan }}</span>
                  </div>
                  <ChevronsUpDown class="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                align="start"
                side="bottom"
                :side-offset="4"
              >
                <DropdownMenuLabel class="text-xs text-muted-foreground">
                  Teams
                </DropdownMenuLabel>
                <DropdownMenuItem
                  v-for="(team, index) in teams"
                  :key="team.name"
                  class="gap-2 p-2"
                  @click="setActiveTeam(team)"
                >
                  <div
                    class="flex size-6 items-center justify-center rounded-sm border"
                  >
                    <component :is="team.logo" class="size-4 shrink-0" />
                  </div>
                  {{ team.name }}
                  <DropdownMenuShortcut>⌘{{ index + 1 }}</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem class="gap-2 p-2">
                  <div
                    class="flex size-6 items-center justify-center rounded-md border bg-background"
                  >
                    <Plus class="size-4" />
                  </div>
                  <div class="font-medium text-muted-foreground">Add team</div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent class="group-data-[collapsible=icon]:gap-0">
        <SidebarGroup v-for="navGroup in navMain" :key="navGroup.group">
          <SidebarGroupLabel>
            {{ navGroup.group }}
          </SidebarGroupLabel>

          <SidebarMenu
            v-for="navItem in navGroup.navItems"
            :key="navItem.title"
          >
            <Collapsible
              v-if="navItem.items"
              as-child
              :default-open="navItem.isActive"
              class="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger as-child>
                  <SidebarMenuButton :tooltip="navItem.title">
                    <component :is="navItem.icon" />
                    <span>{{ navItem.title }}</span>
                    <ChevronRight
                      class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                    />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem
                      v-for="subItem in navItem.items"
                      :key="subItem.title"
                      :class="{
                        'pointer-events-none opacity-50': subItem.disabled,
                      }"
                    >
                      <SidebarMenuSubButton as-child>
                        <NuxtLink :to="subItem.url" :target="subItem.target">
                          <span>{{ subItem.title }}</span>
                        </NuxtLink>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>

            <SidebarMenuItem
              v-else
              :class="{
                'pointer-events-none opacity-50': navItem.disabled,
              }"
            >
              <SidebarMenuButton as-child>
                <NuxtLink :to="navItem.url" :target="navItem.target">
                  <component :is="navItem.icon" />
                  <span>{{ navItem.title }}</span>
                </NuxtLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <SidebarMenuButton
                  size="lg"
                  class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar class="h-8 w-8 rounded-lg">
                    <AvatarImage :src="user.avatar" :alt="user.name" />
                    <AvatarFallback class="rounded-lg"> CN </AvatarFallback>
                  </Avatar>
                  <div class="grid flex-1 text-left text-sm leading-tight">
                    <span class="truncate font-semibold">{{ user.name }}</span>
                    <span class="truncate text-xs">{{ user.email }}</span>
                  </div>
                  <ChevronsUpDown class="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                :side-offset="4"
              >
                <DropdownMenuLabel class="p-0 font-normal">
                  <div
                    class="flex items-center gap-2 px-1 py-1.5 text-left text-sm"
                  >
                    <Avatar class="h-8 w-8 rounded-lg">
                      <AvatarImage :src="user.avatar" :alt="user.name" />
                      <AvatarFallback class="rounded-lg"> CN </AvatarFallback>
                    </Avatar>
                    <div class="grid flex-1 text-left text-sm leading-tight">
                      <span class="truncate font-semibold">{{
                        user.name
                      }}</span>
                      <span class="truncate text-xs">{{ user.email }}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Sparkles />
                    Upgrade to Pro
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <BadgeCheck />
                    Account
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell />
                    Notifications
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>

    <SidebarInset>
      <header
        class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
      >
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" />
          <Separator orientation="vertical" class="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem class="hidden md:block">
                <BreadcrumbLink href="#"> Application </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator class="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div class="ml-auto flex items-center gap-2 px-4">
          <ColorMode />
        </div>
      </header>
      <div class="min-h-[calc(100vh-64px)] p-4 pt-0">
        <slot />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
