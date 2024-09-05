import { FC } from "react";

import Typography from "components/Typography";
import Styled from "./styles";

type ProgressProps = {
  value: number;
  maxValue?: number;
};

const Progress: FC<ProgressProps> = ({ value, maxValue = 100 }) => {
  return (
    <Styled>
      <progress
        value={value}
        max={maxValue}
        className="progress"
        data-testid="progress"
      />
      <div className="progress-footer">
        <Typography tag="p" pale>
          Processed
        </Typography>
        <Typography tag="p" pale>
          Delivered
        </Typography>
      </div>
    </Styled>
  );
};

export default Progress;
