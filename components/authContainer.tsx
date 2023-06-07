"use client";

import { useQuery } from "@tanstack/react-query";
// import { Alert, AlertIcon } from "@chakra-ui/react";
import { Button } from "antd";
import { GetServerSideProps } from "next";
import {
  ClientSafeProvider,
  getCsrfToken,
  getProviders,
  signIn,
} from "next-auth/react";
import { useRouter } from "next/router";
import { use, useState } from "react";

interface Credentials {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
}

export async function getData(): Promise<{
  credentials?: ClientSafeProvider | null;
  csrf?: string;
}> {
  const res = await getProviders();
  const csrf = await getCsrfToken();

  return {
    credentials: res?.credentials,
    csrf,
  };
}

// { children }: { children: React.ReactNode }
const AuthContainer = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { data, error, status } = useQuery({
    queryFn: async () => await getData(),
    queryKey: ["providers"],
  });

  if (!data) return <></>;
  if (!data.credentials) return <></>;
  if (!data.csrf) return <></>;

  const { credentials, csrf } = data;
  const goSignIn = async (credentials: Credentials) => {
    setLoading(true);

    if (!email.trim()) {
      // alert("Email is required");

      setLoading(false);
      return;
    }
    const signInfo = await signIn(credentials.id, {
      email,
      password,
      redirect: false,
    });
    setLoading(false);

    if (signInfo?.error) {
      // alert(signInfo?.error);
      return <></>;
    }

    // router.replace("/kanban");
  };

  return (
    <div className="caonima">
      <div className="text-black">
        <div className="text-black">
          <form
            className="flex"
            onSubmit={(evt) => {
              evt.preventDefault();
              goSignIn(credentials);
            }}
          >
            <input name="csrfToken" type="hidden" defaultValue={csrf!} />
            <input
              id="email"
              type="email"
              autoComplete="on"
              placeholder="Please enter your email"
              size={30}
              value={email}
              onInput={(evt) => {
                setEmail((evt.target as HTMLInputElement).value);
              }}
              onKeyDown={(evt) => {
                if (evt.key === "Enter") {
                  // goSignIn(providers);
                }
              }}
            />
            <input
              id="password"
              type="password"
              autoComplete="on"
              placeholder="Please enter your password"
              size={30}
              value={password}
              onInput={(evt) => {
                setPassword((evt.target as HTMLInputElement).value);
              }}
              onKeyDown={(evt) => {
                if (evt.key === "Enter") {
                  // goSignIn(providers);
                }
              }}
            />

            <Button type="link" loading={loading} htmlType="submit">
              登录
            </Button>
            <hr />
          </form>
        </div>
      </div>
      {/* <img src="/dragon.jpg" alt="Pattern Background" className={} /> */}
    </div>
  );
};

export default AuthContainer;
