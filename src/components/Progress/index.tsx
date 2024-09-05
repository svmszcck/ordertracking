import { FC } from "react";

import Typography from "components/Typography";
import Styled from "./styles";

type ProgressProps = {
  value: number;
  maxValue?: number;
  startText?: string;
  endText?: string;
};

const Progress: FC<ProgressProps> = ({
  value,
  maxValue = 100,
  startText,
  endText,
}) => {
  return (
    <Styled>
      <progress
        value={value}
        max={maxValue}
        className="progress"
        data-testid="progress"
        aria-label="Order Delivery Progress"
        aria-valuenow={value}
        aria-valuemax={maxValue}
      />
      {startText && endText && (
        <div className="progress-footer" data-testid="progress-footer">
          <Typography tag="p" pale>
            {startText}
          </Typography>
          <Typography tag="p" pale>
            {endText}
          </Typography>
        </div>
      )}
    </Styled>
  );
};

export default Progress;
