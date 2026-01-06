"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import type { LoginFormValues } from "@/interfaces/auth";
import { loginSchema } from "@/interfaces/schemas";
import InputGroup from "@/ui/components/InputGroup";

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = handleSubmit((data: LoginFormValues) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Stack
        direction={"column"}
        alignItems={"center"}
        sx={{ maxWidth: "400px" }}
        spacing={8}
      >
        <Box textAlign={"center"}>
          <Typography variant="h6" fontWeight={"semiBold"} mb={4} mt={8}>
            관리자님, 환영합니다!
          </Typography>
          <Typography>계속하려면 로그인하세요</Typography>
        </Box>
        <Box>
          {/* -- Email -- */}
          <InputGroup
            label="이메일"
            type="email"
            autoFocus
            placeholder="이메일을 입력하세요"
            {...register("email")}
            error={!!errors?.email}
            helperText={errors?.email?.message}
          />
          {/* -- Password -- */}
          <InputGroup
            label="비밀번호"
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호를 입력하세요"
            {...register("password")}
            error={!!errors?.password}
            helperText={errors?.password?.message}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleTogglePasswordVisibility}
                  edge="end"
                  sx={{
                    "& svg": { width: 16, height: 16 },
                    marginRight: "2px",
                  }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </Box>
        <Button
          fullWidth
          endIcon={<ChevronRight />}
          type="submit"
          size="lg"
          disabled={loginMutation.isPending}
          startIcon={loginMutation.isPending && <CircularProgress />}
        >
          관리자로 로그인
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
