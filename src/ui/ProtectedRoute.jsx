import { styled } from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  //Load Authenticated User
  const { isLoading, isAuthenticated, user } = useUser();

  //If user is not authenticated, redirect to login page

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("login");
  }, [isAuthenticated, isLoading, navigate]);

  //Show Loading Screen while loading user
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //If user is authenticated, render the app

  if (isAuthenticated) return children;
};

export default ProtectedRoute;
