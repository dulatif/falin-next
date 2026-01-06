"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  FormLabel,
  Input,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { login } from "@/utils/next-auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);

    // Simulate a valid Sanctum token (ID|Hash)
    // Hash needs to be at least 30 chars per isValidSanctumToken
    const fakeToken =
      "1|mocked_token_hash_value_that_is_long_enough_for_validation";

    await login(fakeToken);
    router.push("/admin/dashboard");
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ height: "100vh", display: "flex", alignItems: "center" }}
    >
      <Card sx={{ width: "100%" }}>
        <CardContent>
          <Typography component="h1" variant="h5" align="center" gutterBottom>
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
            <FormControl>
              <FormLabel>Email Address</FormLabel>
              <Input onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
