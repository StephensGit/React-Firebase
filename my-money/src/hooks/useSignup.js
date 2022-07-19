import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { AuthContext, useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      // signup user
      const response = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!response) {
        throw new Error("Could not complete sign up");
      }

      //   add display name to user
      await response.user.updateProfile({ displayName });

      // dispatch login action
      dispatch({ type: "LOGIN", payload: response?.user });
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err);
        setError(err.message);
        setIsPending(false);
      }
    }
  };
  useEffect(() => {
    return setIsCancelled(true);
  }, []);

  return { error, isPending, signup };
};
