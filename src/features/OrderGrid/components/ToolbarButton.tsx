import { Button } from "@mui/material";

interface IToolBarButtonProps {
  Icon: any;
  text: string;
  handleClick?: any;
}

export const ToolbarButton = ({
  Icon,
  text,
  handleClick,
}: IToolBarButtonProps) => {
  return (
    <Button variant="contained" sx={{ height: 32 }} onClick={handleClick}>
      <Icon />
      {text}
    </Button>
  );
};
