import React from "react";
import { useMutation } from "react-query";
import { logout } from "../../api/api_client";
import { useAppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";

const SignOutButton = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const mutation = useMutation(logout, {
    onSuccess: (data) => {
      showToast({
        message: data.msg,
        type: "SUCCESS",
      });
      navigate("/login");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const handleLogout = () => {
    mutation.mutate();
  };
  return (
    <button
      className={
        "flex text-primary bg-white  items-center font-bold px-3 p-2 rounded"
      }
      onClick={handleLogout}
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
