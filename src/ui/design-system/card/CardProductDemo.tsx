"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { ShoppingCart } from "phosphor-react";

// # entity
interface Product {
  id: number;
  title: string;
  category: string;
  image: string;
  price: number;
  rating: number;
  isNew?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    title: "Nike Air Max 270",
    category: "SNEAKERS",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    price: 129.0,
    rating: 4.5,
    isNew: true,
  },
  {
    id: 2,
    title: "Apple Watch Series 7",
    category: "ELECTRONICS",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80",
    price: 399.0,
    rating: 4.8,
  },
  {
    id: 3,
    title: "Sony WH-1000XM4",
    category: "AUDIO",
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80",
    price: 348.0,
    rating: 4.7,
    isNew: true,
  },
  {
    id: 4,
    title: "Classic Leather Bag",
    category: "ACCESSORIES",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80",
    price: 199.5,
    rating: 4.3,
  },
];

// # components
export default function CardProductDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Example of product cards grid.
      </Typography>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={3}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.title}
                />
                {product.isNew && (
                  <Chip
                    label="New"
                    color="primary"
                    size="small"
                    sx={{ position: "absolute", top: 12, right: 12 }}
                  />
                )}
              </Box>
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Box>
                  <Typography
                    variant="overline"
                    color="text.secondary"
                    fontWeight={600}
                  >
                    {product.category}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    fontWeight={700}
                    lineHeight={1.2}
                  >
                    {product.title}
                  </Typography>
                </Box>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <Rating
                    value={product.rating}
                    precision={0.1}
                    size="small"
                    readOnly
                  />
                  <Typography variant="body2" color="text.secondary">
                    ({product.rating})
                  </Typography>
                </Stack>

                <Box sx={{ mt: "auto" }}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography
                      variant="h6"
                      color="primary.main"
                      fontWeight={700}
                    >
                      ${product.price.toFixed(2)}
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ minWidth: "unset", p: 1 }}
                    >
                      <ShoppingCart weight="fill" size={20} />
                    </Button>
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
