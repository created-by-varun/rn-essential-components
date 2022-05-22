import styled from 'styled-components/native';

interface IProps {
  r?: number;
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
  width?: number | string;
  height?: number | string;
  background?: string;
  justify?: string;
  align?: string;
  borderColor?: string;
  centered?: boolean;
  vcentered?: boolean;
  hcentered?: boolean;
  flex?: number;
  alignSelf?: string;
  opacity?: number;
  borderBottomColor?: string;
}

const style = (props: IProps) => ({
  ...(props.r && {borderRadius: props.r}),
  ...(props.m && {margin: props.m}),
  ...(props.p && {padding: props.p}),
  ...(props.ml && {marginLeft: props.ml}),
  ...(props.mr && {marginRight: props.mr}),
  ...(props.mt && {marginTop: props.mt}),
  ...(props.mb && {marginBottom: props.mb}),
  ...(props.mv && {marginVertical: props.mv}),
  ...(props.mh && {marginHorizontal: props.mh}),
  ...(props.pl && {paddingLeft: props.pl}),
  ...(props.pr && {paddingRight: props.pr}),
  ...(props.pt && {paddingTop: props.pt}),
  ...(props.pb && {paddingBottom: props.pb}),
  ...(props.pv && {paddingVertical: props.pv}),
  ...(props.ph && {paddingHorizontal: props.ph}),
  ...(props.width && {width: props.width}),
  ...(props.height && {height: props.height}),
  ...(props.flex && {flex: props.flex}),
  ...(props.background && {backgroundColor: props.background}),
  ...(props.justify && {justifyContent: props.justify}),
  ...(props.align && {alignItems: props.align}),
  ...(props.alignSelf && {alignItems: props.alignSelf}),
  ...(props.borderColor && {borderColor: props.borderColor, borderWidth: 1}),
  ...(props.centered && {justifyContent: 'center', alignItems: 'center'}),
  ...(props.opacity && {opacity: props.opacity}),
  ...(props.borderBottomColor && {
    borderBottomColor: props.borderBottomColor,
    borderBottomWidth: 1,
  }),
});

export const Column = styled.View((props: IProps) => ({
  ...(props.vcentered && {justifyContent: 'center'}),
  ...(props.hcentered && {alignItems: 'center'}),
  ...style(props),
}));

export const SafeColumn = styled.SafeAreaView((props: IProps) => ({
  ...(props.vcentered && {justifyContent: 'center'}),
  ...(props.hcentered && {alignItems: 'center'}),
  ...style(props),
}));

export const Row = styled.View((props: IProps) => ({
  'flex-direction': 'row',
  ...(props.vcentered && {alignItems: 'center'}),
  ...(props.hcentered && {justifyContent: 'center'}),
  ...style(props),
}));

export const TouchColumn = styled.TouchableOpacity((props: IProps) => ({
  ...(props.vcentered && {justifyContent: 'center'}),
  ...(props.hcentered && {alignItems: 'center'}),
  ...style(props),
}));

export const PressableColumn = styled.Pressable((props: IProps) => ({
  ...(props.vcentered && {justifyContent: 'center'}),
  ...(props.hcentered && {alignItems: 'center'}),
  ...style(props),
}));

export const TouchRow = styled.TouchableOpacity((props: IProps) => ({
  'flex-direction': 'row',
  ...(props.vcentered && {alignItems: 'center'}),
  ...(props.hcentered && {justifyContent: 'center'}),
  ...style(props),
}));

export const PressableRow = styled.Pressable((props: IProps) => ({
  'flex-direction': 'row',
  ...(props.vcentered && {alignItems: 'center'}),
  ...(props.hcentered && {justifyContent: 'center'}),
  ...style(props),
}));
