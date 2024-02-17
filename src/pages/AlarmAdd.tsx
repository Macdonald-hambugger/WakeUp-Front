import AlarmConfigForm from 'components/alarmConfigForm/AlarmConfigForm';
import CustomButton from 'components/alarmConfigForm/CustomButton';
import TimeSelector from 'components/timeSelector/TimeSelector';
import { alarmListState, tempState } from 'context/atom';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

const AlarmAdd = () => {
  const [recoil, setRecoil] = useRecoilState(tempState);
  const navigate = useNavigate();
  useEffect(
    () =>
      setRecoil({
        date: dayjs(),
        days: [],
        message: '',
        sendTo: '',
        time: {
          ampm: '오전',
          hour: 1,
          minute: 0,
        },
      }),
    []
  );

  const handleSubmit = () => {
    const selectedHour = document.getElementById('selected-hour').className;
    const selectedMinute = document.getElementById('selected-minute').className;
    const selectedAMPM = document.getElementById('selected-ampm').className;
    console.log(selectedAMPM, selectedHour, selectedMinute);
    setRecoil({
      ...recoil,
      time: {
        ampm: selectedAMPM,
        hour: Number(selectedHour),
        minute: Number(selectedMinute),
      },
    });

    const list = JSON.parse(localStorage.getItem('list')) ?? [];

    localStorage.setItem(
      'list',
      JSON.stringify([
        ...list,
        {
          ...recoil,
          time: {
            ampm: selectedAMPM,
            hour: Number(selectedHour),
            minute: Number(selectedMinute),
          },
        },
      ])
    );
    navigate('/');
    /*  setList([
      ...list,
      {
        ...recoil,
        time: {
          ampm: selectedAMPM,
          hour: Number(selectedHour),
          minute: Number(selectedMinute),
        },
      },
    ]); */
  };

  return (
    <StyledWrapper>
      <TimeSelector />
      <AlarmConfigForm />
      <div id="buttonWrapper">
        <CustomButton type="cancel" onClick={() => navigate('/')} />
        <CustomButton type="confirm" onClick={handleSubmit} />
      </div>
    </StyledWrapper>
  );
};

export default AlarmAdd;

const StyledWrapper = styled.div`
  border: 1px solid black;
  background-color: black;
  min-height: 100vh;
  margin-bottom: 80px;
  > #buttonWrapper {
    position: fixed;
    background-color: black;
    bottom: 0px;
    width: 100%;
    padding: 16px;
    margin-top: 12px;
    display: flex;
    gap: 11px;
    justify-content: space-between;
  }
`;
