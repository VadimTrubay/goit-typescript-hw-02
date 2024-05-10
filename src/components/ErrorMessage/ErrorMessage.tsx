import React, {useEffect} from "react";
import toast from "react-hot-toast";

const ErrorMessage: React.FC = () => {
  useEffect(() => {
    toast.error("Oops, something went wrong! Reload this page!");
  }, []);

  return null;
};

export default ErrorMessage;
