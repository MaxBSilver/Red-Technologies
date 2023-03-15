import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { ToolbarButton } from "./ToolbarButton";
import AddIcon from "@mui/icons-material/Add";
import { Form } from "./Form";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const AddModal = ({ handleCreate }: any) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ToolbarButton
        Icon={AddIcon}
        text={"Create Order"}
        handleClick={handleOpen}
      />
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Form handleCreate={handleCreate} />
        </Box>
      </Modal>
    </>
  );
};
