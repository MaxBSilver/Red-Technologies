import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { ToolbarButton } from "./ToolbarButton";
import AddIcon from "@mui/icons-material/Add";
import { Form } from "./Form";

interface IAddModalProps {
  handleCreate: () => {};
}

export const AddModal = ({ handleCreate }: IAddModalProps) => {
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
        <Box
          sx={{
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Form handleCreate={handleCreate} handleClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
};
