import TimeScrollSelector from 'components/alarmConfigForm/TimeScrollSelector';

type Props = {
  onChange?: (value: any) => void;
};

const TimeSelector: React.FC<Props> = ({ onChange }) => {
  return <TimeScrollSelector height={200} selectedDay={1} />;
};

export default TimeSelector;
