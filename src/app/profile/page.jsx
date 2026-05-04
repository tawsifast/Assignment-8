"use client";
import ProfileModal from "@/components/ProfileModal";
import Quantity from "@/components/Quantity";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card } from "@heroui/react";
import Link from "next/link";
import React from "react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user, "image");

   const handleSignOut = async () => {
      await authClient.signOut();
    };
  return (
    <div>
     
      { user && <Card className="max-w-100 mx-auto relative flex flex-col items-center border my-10">
        <div className="absolute right-2 top-1">
        <ProfileModal />
        </div>
        <Avatar className="ring-4 ring-[#1A1A2E] ring-offset-2 rounded-full mb-4">
          <Avatar.Image
            alt="John Doe"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback className="bg-[#1A1A2E] text-white">{user?.name[0]}</Avatar.Fallback>
        </Avatar>
        <h2 className="text-xl font-bold text-[#1A1A2E]">{user?.name}</h2>
        <p className="text-md text-muted font-semibold">{user?.email}</p>
       <Button onClick={handleSignOut} size="sm" variant="danger"
              className={"bg-[#E94560] hover:bg-[#c73652]"}
              >
                Sign out
              </Button>
      </Card>}
      {!user && <Card className="w-5/12 mx-auto border my-14 flex flex-col justify-center items-center"><h2>You haven't signin your account </h2>
      <Link href={"/signin"}><Button>Sign in</Button></Link></Card>
        }
    </div>
  );
};

export default ProfilePage;
