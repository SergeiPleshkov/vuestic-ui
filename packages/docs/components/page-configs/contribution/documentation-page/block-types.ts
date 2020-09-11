const title = `{
  type: BlockType.TITLE,
  translationString: 'path to translation string in locale object',
}`

const subtitle = `{
  type: BlockType.SUBTITLE,
  translationString: 'path to translation string in locale object',
}`

const headline = `{
  type: BlockType.HEADLINE,
  translationString: 'path to translation string in locale object',
}`

const paragraph = `{
  type: BlockType.PARAGRAPH,
  translationString: 'path to translation string in locale object',
}`

const example = `{
  type: BlockType.EXAMPLE,
  component: 'path to an example in the component folder',
}`

const code = `{
  type: BlockType.CODE,
  code: 'code string',
}`

const api = `{
  type: BlockType.API,
  componentOptions: 'component',
  apiOptions,
}`

const blocktypes = {
  title,
  subtitle,
  headline,
  paragraph,
  example,
  code,
  api,
}

export default blocktypes
