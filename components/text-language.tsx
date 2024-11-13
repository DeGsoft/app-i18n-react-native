import { FC } from "react";
import { Text as TextRN, TextProps } from "react-native";
import { getText } from '@/languages';

type Props = TextProps & {};

export const TextLanguage: FC<Props> = (props) => {
    const { children } = props;

    return (
        <TextRN>{getText(String(children))}</TextRN>
    )
}