"use client";
import { Check } from "@gravity-ui/icons";
import {Button,Card,Description,FieldError,Form,Input,Label,TextField,} from "@heroui/react";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
    const {register,handleSubmit,watch,formState: { errors },} = useForm();

    const handleRegistration =  (data) => {
        console.log(data,"data");
   
  };

  return (
    <Card className="w-5/12 mx-auto border my-10">
      <Form className="flex w-96 flex-col gap-4 mx-auto"onSubmit={handleSubmit(handleRegistration)}>
        <TextField
          isRequired
         {...register("name")}
          validate={(value) => {
            if (value.length < 3) {
              return "Name must be at least 3 characters";
            }
            return null;
          }}
        >
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>
          <TextField
            isRequired
            {...register("photoyrl")}
          >
            <Label>Photo Url</Label>
            <Input placeholder="Enter photo url" />
            <FieldError />
          </TextField>
        <TextField
          isRequired
          {...register("email")}
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          {...register("password", { required: true })}
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          {/* <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description> */}
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit"><Check />Submit</Button>
          <Button type="reset" variant="secondary">Reset</Button>
        </div>
      </Form>
    </Card>
  );
};

export default SignUpPage;
