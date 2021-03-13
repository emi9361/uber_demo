import styled from 'styled-components';
import { COLORS, FONT_SIZE } from '../style_constants';

//これをimportして使うことでサブテキスト(文字が少し薄く、小さい)スタイルをどのコンポーネントでも使いまわせるようになる
export const SubText = styled.p`
  color: ${COLORS.SUB_TEXT};
  font-size: ${FONT_SIZE.BODY2};
`;
