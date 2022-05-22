import React from 'react';
import type {
    GestureResponderEvent,
    LayoutChangeEvent,
    StyleProp,
    TextStyle,
} from 'react-native';
import styled from 'styled-components/native';

interface IProps {
    flex?: number;
    m?: number;
    p?: number;
    ml?: number;
    mr?: number;
    mt?: number;
    mb?: number;
    mv?: number;
    mh?: number;
    pl?: number;
    pr?: number;
    pt?: number;
    pb?: number;
    pv?: number;
    ph?: number;
    width?: number;
    height?: number;
    color?: string;
    background?: string;
    justify?: string;
    align?: string;
    borderColor?: string;
    centered?: boolean;
    s?: number;
    w?: string;
    ff?: string;
    underlined?: boolean;
    crossline?: boolean;
    capitalized?: boolean;
    uppercased?: boolean;
    italic?: boolean;
    lh?: number;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h5?: boolean;
    h6?: boolean;
    textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through'
    | undefined;
    fontType?: 'int-int' | 'ibm-int' | 'noto-int' | 'ibm' | 'int';
    children: React.ReactNode | undefined;
    style?: StyleProp<TextStyle>;
    onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
    numberOfLines?: number | undefined;
}

const Label = styled.Text((props: IProps) => ({
    ...(props.flex && { flex: props.flex }),
    ...(props.m && { margin: props.m }),
    ...(props.p && { padding: props.p }),
    ...(props.ml && { marginLeft: props.ml }),
    ...(props.mr && { marginRight: props.mr }),
    ...(props.mt && { marginTop: props.mt }),
    ...(props.mb && { marginBottom: props.mb }),
    ...(props.mv && { marginVertical: props.mv }),
    ...(props.mh && { marginHorizontal: props.mh }),
    ...(props.pl && { paddingLeft: props.pl }),
    ...(props.pr && { paddingRight: props.pr }),
    ...(props.pt && { paddingTop: props.pt }),
    ...(props.pb && { paddingBottom: props.pb }),
    ...(props.pv && { paddingVertical: props.pv }),
    ...(props.ph && { paddingHorizontal: props.ph }),
    ...(props.width && { width: props.width }),
    ...(props.height && { height: props.height }),
    color: props.color || '#3A4248',
    ...(props.background && { backgroundColor: props.background }),
    ...(props.justify && { justifyContent: props.justify }),
    ...(props.align && { alignItems: props.align }),
    ...(props.borderColor && { borderColor: props.borderColor, borderWidth: 1 }),
    ...(props.centered && { 'text-align': 'center' }),
    ...(props.w && { 'font-weight': props.w }),
    ...(props.ff && { 'font-family': props.ff }),
    ...(props.underlined && { 'text-decoration-line': 'underline' }),
    ...(props.crossline && { 'text-decoration-line': 'line-through' }),
    ...(props.capitalized && { 'text-transform': 'capitalize' }),
    ...(props.uppercased && { 'text-transform': 'uppercase;' }),
    ...(props.italic && { 'font-style': 'italic' }),
    ...(props.lh && { lineHeight: `${props.lh}px` }),
    ...(props.s && { fontSize: props.s }),
    ...(props.h6 && { fontSize: 18 }),
    ...(props.h5 && { fontSize: 22 }),
    ...(props.h4 && { fontSize: 24 }),
    ...(props.h3 && { fontSize: 28 }),
    ...(props.h2 && { fontSize: 32 }),
    ...(props.h1 && { fontSize: 36 }),
    ...(props.textDecorationLine && {
        textDecorationLine: props.textDecorationLine,
    }),
}));

const ZeusLabel = ({ fontType = 'noto-int', ...props }: IProps) => {
    return (
        <Label
            onLayout={props.onLayout}
            onPress={props.onPress}
            {...props}>
            {props.children}
        </Label>
    );
};

export default ZeusLabel;
