"use client";

import { useSession } from "next-auth/react";

const AccountDetails = () => {
  const { data: session } = useSession();
  //console.log(session);

  const renderSessionDetails = () => {
    if (!session) {
      return null;
    }

    return (
      <div>
        <div>
          <strong>Name:</strong> {session.user.name}
        </div>
        <div>
          <strong>Email:</strong> {session.user.email}
        </div>
        <div>
          <strong>Image:</strong> <br />
          <img src={session.user.image} alt="User Image" />
        </div>
      </div>
    );
  };

  return <div>{renderSessionDetails()}</div>;
};

export default AccountDetails;
