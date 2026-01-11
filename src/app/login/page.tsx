"use client";

import {
  LockOutlined,
  MailOutline,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  keyframes,
  Stack,
  styled,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { login } from "@/utils/next-auth";

// --- Animations ---

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
`;

const floatReverse = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(15px) rotate(-1deg); }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

// --- Styled Components ---

const PageWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  backgroundColor: theme.palette.background.default,
}));

const LeftColumn = styled(Box)(({ theme }) => ({
  flex: 1.2,
  backgroundColor: theme.palette.background.paper, // or a specific grey like grey[50]
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(6),
  position: "relative",
  overflow: "hidden",
  borderRight: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const RightColumn = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(4, 8),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4, 3),
  },
}));

const FormContainer = styled(Box)(() => ({
  width: "100%",
  maxWidth: "400px",
  animation: `${slideUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1) both`,
}));

const FloatingGroup = styled("g")<{ delay?: string; reverse?: boolean }>(
  ({ delay, reverse }) => ({
    animation: `${reverse ? floatReverse : float} 7s ease-in-out infinite`,
    animationDelay: delay || "0s",
  }),
);

/**
 * Enhanced Complex Minimalist Illustration
 */
const LoginIllustration: React.FC = () => {
  const theme = useTheme();
  // Using theme colors for SVG elements where appropriate, or keeping specific illustration colors
  // For key elements, we can map to theme primary/secondary
  const primaryMain = theme.palette.primary.main;
  // const primaryLight = theme.palette.primary.light;

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <svg
        width="520"
        height="420"
        viewBox="0 0 520 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="soft_shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
            <feOffset dx="0" dy="4" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.05" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background Network nodes */}
        <g opacity="0.4">
          <circle cx="100" cy="100" r="2" fill={theme.palette.grey[300]} />
          <circle cx="420" cy="150" r="2" fill={theme.palette.grey[300]} />
          <circle cx="150" cy="350" r="2" fill={theme.palette.grey[300]} />
          <path
            d="M100 100L420 150L150 350Z"
            stroke={theme.palette.grey[200]}
            strokeWidth="0.5"
          />
        </g>

        {/* Layer 1: Background Plane (Floating) */}
        <FloatingGroup delay="-1s" reverse>
          <rect
            x="80"
            y="120"
            width="280"
            height="200"
            rx="20"
            fill="white"
            filter="url(#soft_shadow)"
          />
          <rect
            x="110"
            y="150"
            width="100"
            height="8"
            rx="4"
            fill={theme.palette.grey[100]}
          />
          <rect
            x="110"
            y="170"
            width="160"
            height="8"
            rx="4"
            fill={theme.palette.grey[100]}
          />
          <rect
            x="110"
            y="210"
            width="40"
            height="40"
            rx="8"
            fill={primaryMain}
            opacity="0.05"
          />
          <rect
            x="160"
            y="210"
            width="40"
            height="40"
            rx="8"
            fill={primaryMain}
            opacity="0.05"
          />
          <rect
            x="210"
            y="210"
            width="40"
            height="40"
            rx="8"
            fill={primaryMain}
            opacity="0.05"
          />
        </FloatingGroup>

        {/* Layer 2: Middle Focus Card */}
        <FloatingGroup delay="0s">
          <rect
            x="180"
            y="60"
            width="220"
            height="260"
            rx="24"
            fill="white"
            stroke={theme.palette.grey[100]}
            strokeWidth="1"
            filter="url(#soft_shadow)"
          />
          {/* Mock UI Header */}
          <rect
            x="210"
            y="95"
            width="40"
            height="40"
            rx="20"
            fill={primaryMain}
          />
          <path
            d="M225 110L230 115L240 105"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <rect
            x="210"
            y="155"
            width="120"
            height="10"
            rx="5"
            fill={theme.palette.grey[100]}
          />
          <rect
            x="210"
            y="175"
            width="80"
            height="10"
            rx="5"
            fill={theme.palette.grey[100]}
          />

          {/* Progress Bars */}
          <rect
            x="210"
            y="215"
            width="160"
            height="6"
            rx="3"
            fill={theme.palette.grey[100]}
          />
          <rect
            x="210"
            y="215"
            width="100"
            height="6"
            rx="3"
            fill={primaryMain}
          />

          <rect
            x="210"
            y="235"
            width="160"
            height="6"
            rx="3"
            fill={theme.palette.grey[100]}
          />
          <rect x="210" y="235" width="130" height="6" rx="3" fill="#49C3D0" />
        </FloatingGroup>

        {/* Layer 3: Foreground Floating Nodes */}
        <FloatingGroup delay="-3s" reverse>
          <circle
            cx="420"
            cy="280"
            r="35"
            fill="white"
            filter="url(#soft_shadow)"
          />
          <path
            d="M410 280H430M420 270V290"
            stroke={primaryMain}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </FloatingGroup>

        <FloatingGroup delay="-1.5s">
          <rect
            x="120"
            y="280"
            width="70"
            height="70"
            rx="35"
            fill="white"
            filter="url(#soft_shadow)"
          />
          <circle cx="155" cy="315" r="15" fill="#49C3D0" opacity="0.1" />
          <circle cx="155" cy="315" r="6" fill="#49C3D0" />
        </FloatingGroup>

        {/* Decorative Particles */}
        <circle cx="450" cy="80" r="6" fill={primaryMain} opacity="0.4">
          <animate
            attributeName="opacity"
            values="0.2;0.6;0.2"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="60" cy="250" r="4" fill="#49C3D0" opacity="0.4" />
      </svg>

      <Box
        sx={{
          position: "absolute",
          bottom: -60,
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,
            color: "text.primary",
            mb: 1,
            letterSpacing: "-0.02em",
          }}
        >
          Work smarter, together.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            maxWidth: "320px",
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          The workspace for high-performance teams. Streamline your workflow in
          minutes.
        </Typography>
      </Box>
    </Box>
  );
};

export default function LoginPage() {
  const router = useRouter();
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Preserved from original
    axios.get("/api/hello").then((res) => {
      console.log(res.data);
    });
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);

    // Simulate a valid Sanctum token (ID|Hash)
    // Hash needs to be at least 30 chars per isValidSanctumToken
    const fakeToken =
      "1|mocked_token_hash_value_that_is_long_enough_for_validation";

    await login(fakeToken);
    router.push("/design-system/dashboard");
  };

  return (
    <PageWrapper>
      <LeftColumn>
        <LoginIllustration />

        <Link href="/">
          <Box
            sx={{
              position: "absolute",
              bottom: 40,
              left: 40,
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Image
              src="/falin-logo.png"
              alt="Falin Next Logo"
              width={28}
              height={28}
              style={{ borderRadius: "6px" }}
            />
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 800,
                letterSpacing: -0.5,
                color: "text.primary",
              }}
            >
              FALIN NEXT
            </Typography>
          </Box>
        </Link>
      </LeftColumn>

      <RightColumn>
        <FormContainer>
          <Box sx={{ mb: 6 }}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
              <Link href="/">
                <Image
                  src="/falin-logo.png"
                  alt="Falin Next Logo"
                  width={64}
                  height={64}
                  style={{ borderRadius: "12px" }}
                />
              </Link>
            </Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                letterSpacing: "-0.04em",
                mb: 1.5,
                color: "text.primary",
              }}
            >
              Sign in to Falin Next
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", fontWeight: 400 }}
            >
              Welcome back! Please enter your details.
            </Typography>
          </Box>

          <Stack component="form" onSubmit={handleLogin} spacing={2.5}>
            <Box>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 600,
                  color: "text.secondary",
                  mb: 1,
                  display: "block",
                }}
              >
                Email Address
              </Typography>
              <TextField
                fullWidth
                placeholder="you@company.com"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutline
                        sx={{
                          fontSize: 20,
                          color: theme.palette.text.disabled,
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    bgcolor: theme.palette.background.paper,
                    "& fieldset": { borderColor: "transparent" },
                    // Use theme for hover/focus if possible, or keep custom
                    "&:hover fieldset": { borderColor: theme.palette.divider },
                    "&.Mui-focused fieldset": {
                      borderColor: theme.palette.primary.main,
                      borderWidth: "1px",
                    },
                  },
                }}
              />
            </Box>

            <Box>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 600,
                  color: "text.secondary",
                  mb: 1,
                  display: "block",
                }}
              >
                Password
              </Typography>
              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlined
                        sx={{
                          fontSize: 20,
                          color: theme.palette.text.disabled,
                        }}
                      />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        size="sm"
                      >
                        {showPassword ? (
                          <VisibilityOff
                            sx={{ fontSize: 20, color: "text.secondary" }}
                          />
                        ) : (
                          <Visibility
                            sx={{ fontSize: 20, color: "text.secondary" }}
                          />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    bgcolor: theme.palette.background.paper,
                    "& fieldset": { borderColor: "transparent" },
                    "&:hover fieldset": { borderColor: theme.palette.divider },
                    "&.Mui-focused fieldset": {
                      borderColor: theme.palette.primary.main,
                      borderWidth: "1px",
                    },
                  },
                }}
              />
              <Box
                sx={{ display: "flex", justifyContent: "flex-end", mt: 1.5 }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "primary.main",
                    fontWeight: 700,
                    cursor: "pointer",
                    "&:hover": { color: "primary.dark" },
                  }}
                >
                  Forgot password?
                </Typography>
              </Box>
            </Box>

            <Button
              fullWidth
              variant="contained"
              type="submit"
              disableElevation
              sx={{
                bgcolor: "primary.main",
                color: "background.paper",
                py: 1.8,
                borderRadius: "12px",
                textTransform: "none",
                fontSize: "0.95rem",
                fontWeight: 700,
                mt: 1,
                "&:hover": {
                  bgcolor: "primary.dark",
                },
              }}
            >
              Sign In
            </Button>

            <Box sx={{ position: "relative", py: 2.5 }}>
              <Box
                sx={{ borderBottom: `1px solid ${theme.palette.divider}` }}
              />
              <Typography
                variant="caption"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  bgcolor: theme.palette.background.default,
                  px: 2,
                  color: "text.disabled",
                  fontWeight: 500,
                }}
              >
                OR CONTINUE WITH
              </Typography>
            </Box>

            <Button
              fullWidth
              variant="outlined"
              startIcon={
                <Image
                  src="/google-icon.png"
                  width={18}
                  height={18}
                  alt="Google"
                />
              }
              sx={{
                borderColor: theme.palette.divider,
                color: "text.primary",
                py: 1.5,
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  borderColor: theme.palette.text.secondary,
                  bgcolor: theme.palette.action.hover,
                },
              }}
            >
              Google Account
            </Button>
          </Stack>

          <Typography
            variant="body2"
            sx={{ mt: 5, textAlign: "center", color: "text.secondary" }}
          >
            New to the platform?{" "}
            <Typography
              component="span"
              variant="body2"
              sx={{ color: "primary.main", fontWeight: 700, cursor: "pointer" }}
            >
              Create an account
            </Typography>
          </Typography>
        </FormContainer>
      </RightColumn>
    </PageWrapper>
  );
}
