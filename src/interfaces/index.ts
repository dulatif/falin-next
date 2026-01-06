/**
 * Namespace Interface Exports
 *
 * This module provides a centralized export for all interfaces and types.
 * Import types from here instead of individual files for cleaner imports.
 *
 * @example
 * // Instead of:
 * import { Banner, CreateBannerFormValues } from '@/interfaces/banner';
 * import { ID, MutationParams } from '@/interfaces/general';
 *
 * // Use:
 * import { Banner, CreateBannerFormValues, ID, MutationParams } from '@/interfaces';
 */

// Auth types
export * from "./auth";
// Entity-specific types
// Auth types
export * from "./auth";
// General types (base types used across the app)
export * from "./general";
// Schemas (form validations)
export * from "./schemas";
