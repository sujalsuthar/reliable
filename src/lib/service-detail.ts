export interface ServiceBenefitItem {
  title: string
  titleAr?: string
  description: string
  descriptionAr?: string
}

export interface ServiceFaqItem {
  question: string
  questionAr?: string
  answer: string
  answerAr?: string
}

export function parsePipeLines(text: string): { title: string; description: string }[] {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [title, ...rest] = line.split('|')
      const description = rest.join('|').trim()
      return {
        title: title.trim(),
        description: description || title.trim(),
      }
    })
}

export function formatPipeLines(items: { title: string; description: string }[]): string {
  return items.map((item) => `${item.title}|${item.description}`).join('\n')
}

export function parseFaqLines(text: string): { question: string; answer: string }[] {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [question, ...rest] = line.split('|')
      return {
        question: question.trim(),
        answer: rest.join('|').trim(),
      }
    })
}

export function formatFaqLines(items: { question: string; answer: string }[]): string {
  return items.map((item) => `${item.question}|${item.answer}`).join('\n')
}

export function parseStepLines(text: string): string[] {
  return text
    .split('\n')
    .map((line) => line.replace(/^\d+[\).\s-]+/, '').trim())
    .filter(Boolean)
}

export function formatStepLines(steps: string[]): string {
  return steps.map((step, index) => `${index + 1}. ${step}`).join('\n')
}

export function mergeBilingualBenefits(
  en: { title: string; description: string }[],
  ar: { title: string; description: string }[],
): ServiceBenefitItem[] {
  return en.map((item, index) => ({
    title: item.title,
    description: item.description,
    titleAr: ar[index]?.title,
    descriptionAr: ar[index]?.description,
  }))
}

export function mergeBilingualFaqs(
  en: { question: string; answer: string }[],
  ar: { question: string; answer: string }[],
): ServiceFaqItem[] {
  return en.map((item, index) => ({
    question: item.question,
    answer: item.answer,
    questionAr: ar[index]?.question,
    answerAr: ar[index]?.answer,
  }))
}

export const SERVICE_CATEGORY_OPTIONS = [
  { label: 'Project Management', value: 'Project Management' },
  { label: 'Engineering Services', value: 'Engineering Services' },
] as const
