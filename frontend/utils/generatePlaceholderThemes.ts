import { Theme } from '../../types/static'
import theme from '../theme'

export default function generatePlaceholderThemes(count: number): Theme[] {
  return Array.from(new Array(count), (_, index) => ({
    objectID: `placeholder-${index}`,
    extensionId: '',
    type: null,
    name: '',
    shortDescription: '',
    extensionName: '',
    publisherName: '',
    repository: '',
    repositoryOwner: '',
    repositoryBranch: '',
    repositoryPath: '',
    lastUpdated: -1,
    publishedDate: -1,
    releaseDate: -1,
    installs: -1,
    rating: -1,
    ratingCount: -1,
    trendingDaily: -1,
    trendingWeekly: -1,
    trendingMonthly: -1,
    colors: {
      activityBarBackground: theme.colors.background,
      activityBarForeground: theme.colors.background,
      statusBarBackground: theme.colors.background,
      statusBarForeground: theme.colors.background,
      editorBackground: theme.colors.background,
      editorGroupHeaderTabsBackground: theme.colors.background,
      editorGroupHeaderTabsBorder: theme.colors.background,
      editorLineNumberForeground: theme.colors.background,
      tabActiveBackground: theme.colors.background,
      tabActiveForeground: theme.colors.background,
      tabActiveBorder: theme.colors.background,
      tabBorder: theme.colors.inputBorder,
      tabInactiveBackground: theme.colors.background,
      tabInactiveForeground: theme.colors.background,
      contrastActiveBorder: null,
      contrastBorder: null,
    },
    tokens: {
      keywordForeground: theme.colors.background,
      keywordFontStyle: 'normal',
      variableForeground: theme.colors.background,
      variableFontStyle: 'normal',
      literalForeground: theme.colors.background,
      literalFontStyle: 'normal',
      numberForeground: theme.colors.background,
      numberFontStyle: 'normal',
      stringForeground: theme.colors.background,
      stringFontStyle: 'normal',
      commentForeground: theme.colors.background,
      commentFontStyle: 'normal',
      classForeground: theme.colors.background,
      classFontStyle: 'normal',
      functionForeground: theme.colors.background,
      functionFontStyle: 'normal',
      selectorForeground: theme.colors.background,
      selectorFontStyle: 'normal',
      tagForeground: theme.colors.background,
      tagFontStyle: 'normal',
      attributeForeground: theme.colors.background,
      attributeFontStyle: 'normal',
    },
  }))
}
