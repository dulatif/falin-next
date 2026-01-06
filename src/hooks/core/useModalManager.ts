import { useState } from "react";
import { ID } from "@/interfaces";

/**
 * Modal types supported by the manager
 */
export type ModalType =
  | "add"
  | "edit"
  | "delete"
  | "detail"
  | "accept"
  | "reject";

/**
 * Modal state containing visibility and associated entity ID
 */
interface ModalState {
  isOpen: boolean;
  entityId: ID;
}

/**
 * Return type for the useModalManager hook
 */
export interface UseModalManagerReturn {
  // State getters
  modals: Record<ModalType, ModalState>;

  // Action functions
  openModal: (type: ModalType, entityId?: ID) => void;
  closeModal: (type: ModalType) => void;
  getModalState: (type: ModalType) => ModalState;

  // Convenience getters for common use cases
  isOpen: (type: ModalType) => boolean;
  getEntityId: (type: ModalType) => ID;
}

/**
 * Custom hook to manage modal states and entity IDs
 *
 * @example
 * ```tsx
 * const modalManager = useModalManager();
 *
 * // Open modal with entity ID
 * modalManager.openModal("edit", 123);
 *
 * // Check if modal is open
 * if (modalManager.isOpen("edit")) { ... }
 *
 * // Get entity ID
 * const id = modalManager.getEntityId("edit");
 *
 * // Close modal
 * modalManager.closeModal("edit");
 * ```
 */
export const useModalManager = (): UseModalManagerReturn => {
  const [modals, setModals] = useState<Record<ModalType, ModalState>>({
    add: { isOpen: false, entityId: null },
    edit: { isOpen: false, entityId: null },
    delete: { isOpen: false, entityId: null },
    detail: { isOpen: false, entityId: null },
    accept: { isOpen: false, entityId: null },
    reject: { isOpen: false, entityId: null },
  });

  const openModal = (type: ModalType, entityId: ID = null) => {
    setModals((prev) => ({
      ...prev,
      [type]: { isOpen: true, entityId },
    }));
  };

  const closeModal = (type: ModalType) => {
    setModals((prev) => ({
      ...prev,
      [type]: { isOpen: false, entityId: null },
    }));
  };

  const getModalState = (type: ModalType): ModalState => {
    return modals[type];
  };

  const isOpen = (type: ModalType): boolean => {
    return modals[type].isOpen;
  };

  const getEntityId = (type: ModalType): ID => {
    return modals[type].entityId;
  };

  return {
    modals,
    openModal,
    closeModal,
    getModalState,
    isOpen,
    getEntityId,
  };
};
