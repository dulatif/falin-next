/**
 * Message Helpers for Feature Hooks
 *
 * Provides standard success/error messages.
 */

export const getMessages = () => {
  return {
    banner: {
      CREATE_SUCCESS: "Banner created successfully",
      UPDATE_SUCCESS: "Banner updated successfully",
      DELETE_SUCCESS: "Banner deleted successfully",
      UPLOAD_SUCCESS: "Image uploaded successfully",
    },
    certificate: {
      CREATE_SUCCESS: "Certificate created successfully",
      UPDATE_SUCCESS: "Certificate updated successfully",
      STATUS_SUCCESS: "Status updated successfully",
      DELETE_SUCCESS: "Certificate deleted successfully",
      SYNC_SHOP_SUCCESS: "Shop synced successfully",
      SYNC_DESIGNER_SUCCESS: "Designer synced successfully",
      UPLOAD_SUCCESS: "File uploaded successfully",
    },
    event: {
      CREATE_SUCCESS: "Event created successfully",
      UPDATE_SUCCESS: "Event updated successfully",
      DELETE_SUCCESS: "Event deleted successfully",
      UPLOAD_SUCCESS: "File uploaded successfully",
    },
    faq: {
      CREATE_SUCCESS: "FAQ created successfully",
      UPDATE_SUCCESS: "FAQ updated successfully",
      DELETE_SUCCESS: "FAQ deleted successfully",
    },
    facility: {
      CREATE_SUCCESS: "Facility created successfully",
      UPDATE_SUCCESS: "Facility updated successfully",
      DELETE_SUCCESS: "Facility deleted successfully",
      UPLOAD_SUCCESS: "Image uploaded successfully",
    },
    customerService: {
      UPDATE_SUCCESS: "Updated successfully",
      DELETE_SUCCESS: "Deleted successfully",
      REPLY_SUCCESS: "Reply sent successfully",
    },
    shopCategory: {
      CREATE_SUCCESS: "Category created successfully",
      UPDATE_SUCCESS: "Category updated successfully",
      DELETE_SUCCESS: "Category deleted successfully",
      UPLOAD_SUCCESS: "Image uploaded successfully",
    },
    shopRegistration: {
      APPROVE_SUCCESS: "Registration approved",
      REJECT_SUCCESS: "Registration rejected",
    },
    withdrawal: {
      ACCEPT_SUCCESS: "Withdrawal accepted",
      REJECT_SUCCESS: "Withdrawal rejected",
    },
  };
};
