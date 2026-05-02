import React from "react";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaRegEdit } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
const ProfileModal = () => {

  const {register,handleSubmit} = useForm();

  const onSubmit = async (data) => {
      const {name, image} = data;
      console.log(data,"data");
      const { data:res, error } = await authClient.updateUser({
     name,
     image,
  });
  console.log( image, "update");
}
  return (
    <div>
      <Modal>
        <Button variant="secondary"><FaRegEdit /></Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                 <CgProfile />
                </Modal.Icon>
                <Modal.Heading>Update User</Modal.Heading>
               
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">

                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <TextField className="w-full" {...register("name")} type="text">
                      <Label>Name</Label>
                      <Input placeholder="Enter your name" />
                    </TextField>
                    <TextField className="w-full"{...register("image")} type="text">
                      <Label>Image</Label>
                      <Input placeholder="Enter your email" />
                    </TextField>
                      <Modal.Footer>
                <Button slot="close" variant="secondary">
                  Cancel
                </Button>
                <Button type="submit" slot="close">Save</Button>
              </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default ProfileModal;
