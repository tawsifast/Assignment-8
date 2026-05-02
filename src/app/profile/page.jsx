"use client";
import ProfileModal from "@/components/ProfileModal";
import Quantity from "@/components/Quantity";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import React from "react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user, "image");
  return (
    <div>
     
      <Card className="max-w-100 mx-auto relative flex flex-col items-center border my-10">
        <div className="absolute right-2 top-1">
        <ProfileModal />
        </div>
        <Avatar>
          <Avatar.Image
            alt="John Doe"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
        </Avatar>
        <h2 className="text-xl font-bold">{user?.name}</h2>
        <p className="text-md text-muted font-semibold">{user?.email}</p>
       
      </Card>
    </div>
  );
};

export default ProfilePage;
