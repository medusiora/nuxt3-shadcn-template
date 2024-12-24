export interface NavItem {
  title: string
  url?: string | object
  target?: '_blank' | '_self' | '_parent' | '_top'
  icon?: any
  isActive?: boolean
  items?: NavItem[]
  disabled?: boolean
}

export interface NavGroup {
  group: string
  navItems: NavItem[]
}
