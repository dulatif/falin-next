import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  FormControl,
  FormGroup,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  SxProps,
} from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  useGetCertificateById,
  useUpdateCertificateMutation,
} from "@/hooks/CertificateHooks";
import {
  CERTIFICATE_FOR_TYPE_OPTIONS,
  CERTIFICATE_TYPE_OPTIONS,
  CERTIFICATE_UPDATE_FORM_VALUES,
  UpdateCertificateFormValues,
  updateCertificateSchema,
} from "@/interfaces/certificate";
import { ID } from "@/interfaces/general";
import SelectGroup from "@/ui/components/SelectGroup";
import { IModalProps, Modal } from "@/ui/layouts/Modal";

// # styles internal
const stylesInt: {
  modal: IModalProps["containerProps"];
  formGroup: SxProps;
  formControl: SxProps;
} = {
  modal: { sx: { maxWidth: "400px !important" } },
  formGroup: { mt: 3 },
  formControl: { flex: 1, mt: 0 },
};

interface ModalEditCertificateProps {
  certificateId?: ID;
  open: boolean;
  onClose: () => void;
}

const ModalEditCertificate = ({
  open,
  certificateId,
  onClose,
}: ModalEditCertificateProps) => {
  // # state
  const {
    control,
    reset,
    register,
    setValue,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateCertificateFormValues>({
    resolver: zodResolver(updateCertificateSchema),
    defaultValues: CERTIFICATE_UPDATE_FORM_VALUES,
  });

  // # queries
  const certificateQuery = useGetCertificateById(certificateId as number);
  const updateMutation = useUpdateCertificateMutation({
    onSuccess: () => {
      handleClose();
    },
  });

  // # effects
  useEffect(() => {
    if (!certificateQuery.data) return;
    const certificate = certificateQuery.data;
    setValue("id", certificate.id!);
    setValue("name.en", certificate.name.en);
    setValue("name.ko", certificate.name.ko);
    setValue("type", certificate.type);
    setValue("for_type", certificate.for_type);
  }, [certificateQuery.data, setValue]);

  // # functions
  const handleClose = () => {
    reset(CERTIFICATE_UPDATE_FORM_VALUES);
    onClose();
    clearErrors();
  };
  const onSubmit = handleSubmit((data) => updateMutation.mutate(data));

  return (
    <>
      {/* ---------- Main Content ---------- */}
      <Modal open={open} onClose={handleClose} containerProps={stylesInt.modal}>
        <form onSubmit={onSubmit}>
          <Modal.Header title="시설 추가" />
          <Modal.Body>
            <Stack direction={"column"}>
              <FormGroup sx={stylesInt.formGroup}>
                <FormLabel>시설 이름</FormLabel>
                <Stack direction={"column"}>
                  <FormControl
                    error={!!errors.name?.en}
                    sx={stylesInt.formControl}
                  >
                    <Input
                      {...register("name.en")}
                      placeholder="English Name"
                    />
                    <FormHelperText>{errors.name?.en?.message}</FormHelperText>
                  </FormControl>
                  <FormControl
                    error={!!errors.name?.ko}
                    sx={stylesInt.formControl}
                  >
                    <Input {...register("name.ko")} placeholder="한국어 이름" />
                    <FormHelperText>{errors.name?.ko?.message}</FormHelperText>
                  </FormControl>
                </Stack>
              </FormGroup>
              <Controller
                control={control}
                name="for_type"
                render={({ field }) => (
                  <SelectGroup
                    label="인증 대상"
                    {...field}
                    error={!!errors?.for_type?.message}
                    helperText={errors?.for_type?.message}
                    options={CERTIFICATE_FOR_TYPE_OPTIONS}
                  />
                )}
              />
              <Controller
                control={control}
                name="type"
                render={({ field }) => (
                  <SelectGroup
                    label="인증 종류"
                    {...field}
                    error={!!errors?.type?.message}
                    helperText={errors?.type?.message}
                    options={CERTIFICATE_TYPE_OPTIONS}
                  />
                )}
              />
            </Stack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              color="inherit"
              variant="outlined"
              onClick={handleClose}
              type="button"
            >
              취소
            </Button>
            <Button
              color="primary"
              type="submit"
              disabled={updateMutation.isPending}
              loading={updateMutation.isPending}
            >
              추가
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default ModalEditCertificate;
