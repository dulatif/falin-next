"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import ExampleService from "@/api/example";
import { queryKeys } from "@/constant/queryKeys";
import DashboardLayout from "@/ui/layouts/Dashboard/DashboardLayout";

export default function ExamplesPage() {
  const { data: posts, isLoading } = useQuery({
    queryKey: queryKeys.examples.list(),
    queryFn: () => ExampleService.getAll(),
  });

  return (
    <DashboardLayout>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Typography variant="h4" mb={4}>
          Examples
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  API Integration Example
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Fetching data from JSONPlaceholder using the generic Service
                  pattern and React Query.
                </Typography>

                {isLoading ? (
                  <Typography>Loading...</Typography>
                ) : (
                  <Box
                    sx={{
                      maxHeight: 300,
                      overflow: "auto",
                      border: "1px solid #eee",
                      borderRadius: 1,
                      p: 2,
                    }}
                  >
                    {posts?.slice(0, 5).map((post) => (
                      <Box key={post.id} mb={2}>
                        <Typography variant="subtitle2" fontWeight="bold">
                          {post.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {post.body.substring(0, 50)}...
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Form Example
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  (Placeholder for Form Example using React Hook Form + Zod)
                </Typography>
                <Button variant="contained">Test Action</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </DashboardLayout>
  );
}
