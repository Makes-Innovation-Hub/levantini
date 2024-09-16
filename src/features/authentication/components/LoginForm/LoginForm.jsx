// import React from "react";
// import { Container, GoogleSignInButton, LogoutButton, Title } from "./LoginForm.styles";
// import { useAuth } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// const LoginForm = () => {
//   const { currentUser, signInWithGoogle, logout } = useAuth();
//   const navigate = useNavigate();
//   return (
//     <div>
//       <Title>Levantini</Title>
//       <Container>
//         {!currentUser ? (
//           <GoogleSignInButton onClick={signInWithGoogle} navigate="/">
//             <img
//               src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-tmg5cp5v.png"
//               alt="Google icon"
//             />
//             Sign in with Google
//           </GoogleSignInButton>
//         ) : (
//           <LogoutButton onClick={logout}>Logout</LogoutButton>
//         )}
//       </Container>
//     </div>
//   );
// };

// export default LoginForm;

import React from "react";
import { Container, GoogleSignInButton, LogoutButton, Title } from "./LoginForm.styles";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { currentUser, signInWithGoogle, logout } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <Title>Levantini</Title>
      <Container>
        {!currentUser ? (
          <GoogleSignInButton onClick={handleGoogleSignIn}>
            <img
              src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-tmg5cp5v.png"
              alt="Google icon"
            />
            Sign in with Google
          </GoogleSignInButton>
        ) : (
          <LogoutButton onClick={logout}>Logout</LogoutButton>
        )}
      </Container>
    </div>
  );
};

export default LoginForm;
