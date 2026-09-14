import React from 'react';

import {
  FlexWidget,
  ImageWidget,
  SvgWidget,
  TextWidget,
} from 'react-native-android-widget';

import { Images } from '../assets/images/Images';

export function BirthdayWidget() {
  const cakeSvg = `<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="90" height="90" fill="url(#pattern0_2190_10)"/>
<defs>
<pattern id="pattern0_2190_10" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2190_10" transform="scale(0.0111111)"/>
</pattern>
<image id="image0_2190_10" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADyklEQVR4nO2cy04UQRSGe2E0RmJi0HhduPay9BoXsHGlS13owngJ0HVmNMQHmJXQdVoQVrrQ+AxeeAWJK40ro/HCgiDqRlFRNP6mWkGIU9Bjemqmqs+XnIRAzV99/q6u7iqmTxQJgiC0F1DpSVT4RBk1nQEa6ITit1nQQGeZNJ0C4lsgRhZK3yyTpjOgkiMg/XMhATI/p11l0HQGarVVUPzk78HPjxZ+Yv4WsqZTUEnP/3PwtHBpngtZ0xmo1VZD6Zf2BHgC1dE1IWo6BcRV68HTfBJJJURNZ6B/aC1IT62YAOkp0zYkTadA6dMrHzzPx6mQNJ0C4rEGEhgLSdMpID2dPwE9HZKmU0A8kzsBpT+EpOkUKH6YPwEeD0nTKVDpxfwJJJWQNJ1iHvCh+HGOee+RWTCEpOkcVJMdyyehH6F3aHuIms7JRoxZeSke/3PjmYHSD8xl+L8jxBdNQRAEQRCEgMi92qLfEZKmU3wxBWK0v5pO8cUUiNH+ajrFF1MgRvur6RRfTIEY7a+mU3wxBWK0v5pO8cUU+Go04sENIH2h0QTgS5iv98aDG1pncM/VjSA9CqW/ttwManKYHBWPmJzdmkxpFxS/abkB5Npwfo+YjzoyOTkL0j9anjS1KkzuyZnmmhynx8ttMs+P7O8gfaw5JlevbGrsm5ihh36Hi1c2F2806dv2M6y/QOkhxOk+XE7XRZ6Dy+k6VJL9IB4G8ewyeRf7XiJIb4Pib5Yz+xrVdFcUKOhL92QvD9U3+it6hrcW15nS/daRHLDJS8y2jmx9KSoKkL5vMXooKglQ+prlxnivuE6IX9XtJE73RSUBv+fsenP1i+I6If5ct5MAbnx5gap1WK7qT8V1YnvvQ9U6opKA6uh6y4j+WFwnxM9LP3Wo9IBljn5WXCek71rO5nBDm1A9+Tdl2q692VSqb/SdvBp5OoktRs9CJbtX/Hzv4E4QP82id3Cnd+0p2bvM411fVBRQvCV7Zq5/RifMc6b9s+kBKJ5c1H7S/M6b9sZk+4Lli/EmKpJs79m+9p/NnjOzJGod2RI2Tg6D9A2QnqszCuag+DqID2Vt2629yaEvOZhNF8vttyseKdTkhU2lxSOh7KF4smn/CECsu1ueILVJxLq7KSYvmN3qBKk9oqkmi9EsRkOMDjPEaBKjEVKI0SRGI6QQo0mMRkghRpMYjZBCjKZwjM5foC/UUA4KDzZUoC/UUA4KDzZUoC/UUA4KD+Yv0BdqaHeFB1cu0BdqaPeFB+sU6EOgMSOFBwVBEARBEARBEARBEKIl/ALXxdMOYeWsZgAAAABJRU5ErkJggg=="/>
</defs>
</svg>
`;
  const calendar = `<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="#ff4d8d"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2C17.5523 2 18 2.44772 18 3V4H19C20.6569 4 22 5.34315 22 7V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V7C2 5.34315 3.34315 4 5 4H6V3C6 2.44772 6.44772 2 7 2ZM4 10V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V10H4Z"/>
</svg>`;
  const account = `<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="#ff4d8d"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M15 1H9V3H15V1ZM11 13H13V7H11V13ZM19.03 7.39L20.45 5.97C19.98 5.41 19.46 4.89 18.9 4.42L17.48 5.84C16.07 4.7 14.12 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 9.88 19.3 7.93 18.16 6.52L19.03 7.39Z"/>
</svg>`;
  return (
    <FlexWidget
      style={{
        width: 'match_parent',
        height: 'match_parent',
        backgroundColor: '#2A0E17',
        borderRadius: 28,
        padding: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <FlexWidget
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexGap: 10,
        }}
      >
        <FlexWidget
          style={{ flexDirection: 'row', alignItems: 'center', flexGap: 10 }}
        >
          <FlexWidget
            style={{ backgroundColor: '#ffff', padding: 5, borderRadius: 20 }}
          >
            <SvgWidget svg={cakeSvg} style={{ height: 20, width: 20 }} />
          </FlexWidget>
          <TextWidget
            text={'Birthday \nReminders ❤️'}
            style={{ color: '#fff', fontSize: 14, fontWeight: '700' }}
          />
        </FlexWidget>
        <FlexWidget>
          <TextWidget
            text="Mom"
            style={{
              color: '#ff4d8d',
              fontSize: 28,
              fontWeight: '700',
            }}
          />

          <TextWidget
            text="+2 more birthdays"
            style={{
              color: '#ffd5da',
              fontSize: 12,
            }}
          />
        </FlexWidget>
        <FlexWidget style={{ flexDirection: 'row', flexGap: 10 }}>
          <FlexWidget
            style={{
              padding: 3,
              backgroundColor: '#ff72a54f',
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#ffa6c675',
              paddingHorizontal: 8,
              flexDirection: 'row',
              flexGap: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SvgWidget svg={calendar} style={{ height: 14, width: 14 }} />
            <TextWidget
              text={'28 May 2025'}
              style={{ color: '#fff', fontWeight: '500', fontSize: 12 }}
            />
          </FlexWidget>
          <FlexWidget
            style={{
              padding: 3,
              backgroundColor: '#ff72a54f',
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#ffa6c675',
              paddingHorizontal: 8,
              flexDirection: 'row',
              flexGap: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SvgWidget
              svg={account}
              style={{ height: 16, width: 16, marginTop: 2 }}
            />
            <TextWidget
              text={'Today'}
              style={{ color: '#fff', fontWeight: '500', fontSize: 12 }}
            />
          </FlexWidget>
        </FlexWidget>
      </FlexWidget>

      <FlexWidget
        style={{
          backgroundColor: '#4A1630',
          borderRadius: 100,
        }}
      >
        <ImageWidget
          image={Images.widgetCake}
          imageWidth={140}
          imageHeight={140}
        />
      </FlexWidget>
    </FlexWidget>
  );
}
