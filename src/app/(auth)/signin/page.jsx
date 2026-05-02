"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {Button,Card,Description,FieldError,Form,Input,Label,TextField,} from "@heroui/react";
import { error } from "better-auth/api";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { BsGoogle } from "react-icons/bs";

const LoginPage = () => {
  const {register,handleSubmit, watch, formState: { errors }} = useForm();

  const handleLogin = async (data) => {
    const {email, password} = data;
    console.log(data,"data");
    const { data:res, error } = await authClient.signIn.email({
    email,
    password,
    rememberMe: true,
    callbackURL: "/",
});
   console.log(res,error);
    if(error){
    alert(error.message)
   }
   if(res){
    alert("Signin successfull")
   }
  };

  const handleGoogle = async () =>{
    const data = await authClient.signIn.social({
    provider: "google",
  });
  }

  return (
    <Card className="w-5/12 mx-auto border my-10">
      <Form className="flex w-96 flex-col gap-4 mx-auto" onSubmit={handleSubmit(handleLogin)}>
        
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
          >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />

          {/* <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
            </Description> */}
          <FieldError />
        </TextField>

        <div className="flex gap-2 ">
          <Button type="submit" className={"w-full"}><Check />Login</Button>
        </div>
        <p className="text-center">Don't have an account ? <Link href={"/signup"} className="text-blue-500">Register</Link></p>
      </Form>
      <div className="text-center">
      <p className="text-gray-600 mb-2">Or</p>
      <Button onClick={handleGoogle} variant="outline" className={'w-full'}><BsGoogle></BsGoogle> Sign in with Google</Button>
      </div>
        
    </Card>
  );
};

export default LoginPage;
