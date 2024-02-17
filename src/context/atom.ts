import { atom } from 'recoil';

export const tempState = atom({
  key: 'tempState', // unique ID (with respect to other atoms/selectors)
  default: {
    days: [],
    date: null,
    time: {
      ampm: '오전',
      hour: 12,
      minute: 12,
    },
    sendTo: null,
    message: '',
  }, // default value (aka initial value)
});

export const alarmListState = atom<any[]>({
  key: 'tempState', // unique ID (with respect to other atoms/selectors)
  default: [
    {
      days: [],
      date: new Date(),
      time: {
        ampm: '오전',
        hour: 12,
        minute: 12,
      },
      sendTo: null,
      message: '',
    },
  ],
});
