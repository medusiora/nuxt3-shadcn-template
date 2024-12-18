import type { Timestampable } from '~/types/timestampable'
import type { Blameable } from '~/types/blameable'

export interface Post extends Timestampable, Blameable {
  id?: number
  title?: string
  body?: string
}
