import { Button } from "@mui/material";

interface IToolBarButtonProps {
  Icon: any;
  text: string;
}
export const ToolbarButton = ({ Icon, text }: IToolBarButtonProps) => {
  return (
    <Button variant="contained" sx={{ height: 32 }}>
      <Icon></Icon>
      {text}
    </Button>
  );
};
