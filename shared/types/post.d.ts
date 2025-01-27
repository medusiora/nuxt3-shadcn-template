import type { Blameable } from './blameable'
import type { Timestampable } from './timestampable'

export interface Post extends Timestampable, Blameable {
  id?: number
  title: string
  body: string
}
