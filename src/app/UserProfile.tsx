import React from "react";
import Image from "next/image";

function UserProfile() {
  const user = {
    name: "Eric",
    age: 41,
    location: "Auckland",
    image: "/user.png",
  };

  return (
    <div>
      <Image src={user.image} alt={""} width={100} height={100} />
      <Image src="/kiwi-fruit.png" alt={""} width={100} height={100} />
    </div>
  );
}

export default UserProfile;
