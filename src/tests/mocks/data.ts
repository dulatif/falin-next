import { faker } from "@faker-js/faker";

// # mock data factories

/**
 * Generate mock user data
 */
export const createMockUser = () => ({
  id: faker.number.int(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  role: faker.helpers.arrayElement(["admin", "user", "designer"]),
  createdAt: faker.date.past().toISOString(),
});

/**
 * Generate mock banner data
 */
export const createMockBanner = () => ({
  id: faker.number.int(),
  title: faker.lorem.sentence(),
  image: faker.image.url(),
  link: faker.internet.url(),
  isActive: faker.datatype.boolean(),
  createdAt: faker.date.past().toISOString(),
});

/**
 * Generate mock event data
 */
export const createMockEvent = () => ({
  id: faker.number.int(),
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  thumbnail: faker.image.url(),
  startDate: faker.date.future().toISOString(),
  endDate: faker.date.future().toISOString(),
  status: faker.helpers.arrayElement(["CURRENT", "ENDED"]),
  type: faker.helpers.arrayElement(["EVENT", "NEWS"]),
  createdAt: faker.date.past().toISOString(),
});

/**
 * Generate mock certificate data
 */
export const createMockCertificate = () => ({
  id: faker.number.int(),
  name: faker.lorem.words(),
  icon: faker.image.url(),
  status: faker.helpers.arrayElement(["ACTIVE", "PENDING"]),
  createdAt: faker.date.past().toISOString(),
});

/**
 * Generate mock FAQ data
 */
export const createMockFAQ = () => ({
  id: faker.number.int(),
  question: faker.lorem.sentence(),
  answer: faker.lorem.paragraph(),
  order: faker.number.int({ min: 1, max: 100 }),
  createdAt: faker.date.past().toISOString(),
});

/**
 * Generate pagination response
 */
export const createMockPaginationResponse = <T>(
  data: T[],
  page = 1,
  limit = 10,
) => ({
  data,
  meta: {
    page,
    limit,
    total: data.length,
    totalPages: Math.ceil(data.length / limit),
  },
});
