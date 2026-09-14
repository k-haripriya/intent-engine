import React from 'react';
import type { WidgetTaskHandlerProps } from 'react-native-android-widget';
import { HelloWidget } from './HelloWidget';
import { BirthdayWidget } from './BirthdayWidget';

const nameToWidget = {
  Hello: HelloWidget,
  BirthdayWidgetProvider: BirthdayWidget,
};

export async function widgetTaskHandler(props: WidgetTaskHandlerProps) {
  const widgetInfo = props.widgetInfo;
  const Widget =
    nameToWidget[widgetInfo.widgetName as keyof typeof nameToWidget];
  console.log('Widget Action:', props.widgetAction);

  console.log('Widget Name:', widgetInfo.widgetName);
  switch (props.widgetAction) {
    case 'WIDGET_ADDED':
    case 'WIDGET_UPDATE':
    case 'WIDGET_RESIZED':
      await props.renderWidget(<Widget />);
      break;

    case 'WIDGET_DELETED':
      break;

    case 'WIDGET_CLICK':
      break;

    default:
      break;
  }
}
