"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {Button,Card,Description,FieldError,Form,Input,Label,TextField,} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { BsGoogle, BsGooglePlay } from "react-icons/bs";

const RegisterPage = () => {
  const router = useRouter();
    const {register,handleSubmit,watch,formState: { errors },} = useForm();

    const handleRegistration = async (data) => {
      const {name, email, image, password} = data
        console.log(data,"data");

        const { data:res, error } = await authClient.signUp.email({
          name,
          email,
          image,
          password,
          callbackURL:"/signin"
});
   console.log(res, error,"data error");
   if(error){
    alert(error.message)
   }
   if(res){
    alert("Signup successfull")
     router.push("/signin")
   }
  };

  const handleGoogle = async () =>{
    const data = await authClient.signIn.social({
    provider: "google",
    });
    }

  return (
    <Card className="w-11/12 md:w-5/12 mx-auto border my-10">
      <Form className="flex w-full flex-col gap-4 mx-auto"onSubmit={handleSubmit(handleRegistration)}>
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
            {...register("image")}
          >
            <Label>Photo Url</Label>
            <Input placeholder="Enter photo url" />
            <FieldError />
          </TextField>
        <TextField
          isRequired
          {...register("email", { required: true })}
          type="email"
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

        <div className="flex gap-2 justify-center ">
          <Button type="submit"><Check />Submit</Button>
          <Button type="reset" variant="secondary">Reset</Button>
        </div>
        <p className="text-center">If you have an account !  <Link href={"/signin"} className="text-blue-500">Login</Link></p>
      </Form>
       <div className="text-center">
            <p className="text-gray-600 mb-2">Or</p>
            <Button onClick={handleGoogle} variant="outline" className={'w-full'}><BsGoogle/> Sign in with Google</Button>
            </div>
    </Card>
  );
};

export default RegisterPage;
