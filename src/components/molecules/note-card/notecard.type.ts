import { NoteType } from '../../../types/models/note.model'

export type NoteCardProps = {
  data: NoteType
  trash?: boolean
  key?: number
}
