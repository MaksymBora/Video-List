import { Progress } from '../Progress/Progress';
import { ButtonsWrapper, ButtonPrev, ButtonNext } from './Controls.styled';
import { HiArrowSmallRight, HiArrowSmallLeft } from 'react-icons/hi2';

export const Controls = ({ current, total, onChange }) => {
  return (
    <ButtonsWrapper>
      <ButtonPrev disabled={current === 1} onClick={() => onChange(-1)}>
        <HiArrowSmallLeft size={32} />
      </ButtonPrev>
      <Progress current={current} total={total} />
      <ButtonNext disabled={current === total} onClick={() => onChange(1)}>
        <HiArrowSmallRight size={32} />
      </ButtonNext>
    </ButtonsWrapper>
  );
};
