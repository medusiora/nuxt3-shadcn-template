<script setup lang="ts">
import {
  AudioWaveformIcon,
  BadgeCheckIcon,
  BellIcon,
  BoxIcon,
  ChartAreaIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  CircleIcon,
  CommandIcon,
  CreditCardIcon,
  ExternalLinkIcon,
  GalleryVerticalEndIcon,
  IdCardIcon,
  KeyIcon,
  LogOutIcon,
  PanelBottomIcon,
  PenIcon,
  PieChartIcon,
  PlusIcon,
  Settings2Icon,
  SparklesIcon,
  SquareCheckBigIcon,
  TableIcon,
  UserRoundCheckIcon,
  FingerprintIcon,
  ActivityIcon,
  InboxIcon,
} from 'lucide-vue-next'
import type { NavGroup } from '~/types/nav'

// This is sample
const user = {
  name: 'shadcn',
  email: 'm@example.com',
  avatar: '/avatars/01.png',
}
const teams = [
  {
    name: 'Acme Inc',
    logo: GalleryVerticalEndIcon,
    plan: 'Enterprise',
  },
  {
    name: 'Acme Corp.',
    logo: AudioWaveformIcon,
    plan: 'Startup',
  },
  {
    name: 'Evil Corp.',
    logo: CommandIcon,
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
        icon: ChartAreaIcon,
      },
      {
        title: 'Sales & Marketing',
        url: { name: 'dashboard-sales' },
        icon: PieChartIcon,
        disabled: true,
      },
    ],
  },
  {
    group: 'Pages',
    navItems: [
      {
        title: 'Auth',
        icon: UserRoundCheckIcon,
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
        ],
      },
      {
        title: 'CRUD',
        url: '#',
        icon: PenIcon,
        disabled: true,
      },
      {
        title: 'Access Denied',
        url: { name: '401' },
        icon: FingerprintIcon,
      },
      {
        title: 'Not Found',
        url: { name: '404' },
        icon: CircleIcon,
      },
      {
        title: 'Error',
        url: { name: '500' },
        icon: ActivityIcon,
      },
      {
        title: 'Empty',
        url: { name: 'empty' },
        icon: InboxIcon,
      },
    ],
  },
  {
    group: 'Settings',
    navItems: [
      {
        title: 'General',
        url: '#',
        icon: Settings2Icon,
        disabled: true,
      },
      {
        title: 'Security',
        url: '#',
        icon: KeyIcon,
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
        icon: IdCardIcon,
        disabled: true,
      },
      {
        title: 'Input',
        url: '#',
        icon: SquareCheckBigIcon,
        disabled: true,
      },
      {
        title: 'Button',
        url: '#',
        icon: BoxIcon,
        disabled: true,
      },
      {
        title: 'Table',
        url: '#',
        icon: TableIcon,
        disabled: true,
      },
      {
        title: 'Cards',
        url: { name: 'cards' },
        icon: PanelBottomIcon,
      },
      {
        title: 'More',
        url: 'https://www.shadcn-vue.com/docs/components/accordion.html',
        target: '_blank',
        icon: ExternalLinkIcon,
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
                  <ChevronsUpDownIcon class="ml-auto" />
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
                    <PlusIcon class="size-4" />
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
                    <ChevronRightIcon
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
                  <ChevronsUpDownIcon class="ml-auto size-4" />
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
                    <SparklesIcon />
                    Upgrade to Pro
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <BadgeCheckIcon />
                    Account
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCardIcon />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <BellIcon />
                    Notifications
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOutIcon />
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
