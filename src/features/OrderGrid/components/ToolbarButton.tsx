import { Button,  SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface IToolBarButtonProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };
  text: string;
  handleClick?: () => void;
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
