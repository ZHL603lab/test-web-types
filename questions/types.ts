export type Question = {
  uuid: string,
  subjectId: string,
  chapterId: string,
  body: string,
  type: string,
  answer: string,
  explain: string,
  selects: string[],
  sort: number,
  state: string,
}
