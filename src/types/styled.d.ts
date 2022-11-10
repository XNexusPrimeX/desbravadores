// styled.d.ts
import { Theme } from '@react-navigation/native'

import 'styled-components';

type Colors = Theme['colors']

declare module 'styled-components' {
  export interface DefaultTheme extends Colors {}
}