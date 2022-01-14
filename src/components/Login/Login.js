import Userfront from "@userfront/react";

Userfront.init("vbqq5wjb");

const LoginForm = Userfront.build({
  toolId: "blamoo",
});

function Login() {
  return <LoginForm />
}

export default Login;