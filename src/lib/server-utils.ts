import { convert } from 'html-to-text'

export const htmlToTextForDescription = (html: string) => convert(html, { limits: { maxInputLength: 140 } })
