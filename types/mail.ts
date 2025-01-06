export interface Mail {
  id: string
  name: string
  email: string
  subject: string
  text: string
  date: string
  read: boolean
  labels: string[]
}

export interface Account {
  label: string
  email: string
  icon: string
}

export interface Contact {
  name: string
  email: string
}
