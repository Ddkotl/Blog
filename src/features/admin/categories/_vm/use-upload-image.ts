import { selectFile, validateFileSize } from "@/shared/lib/file";
import { useMutation } from "@tanstack/react-query";
import { uploadImageAction } from "../_actions/upload-image";
import { AVATAR_FILE_KEY, AVATAR_MAX_SIZE } from "../_constants";

export const useUploadImage = ({
  onError,
  onSuccess,
}: {
  onError?: (type?: "big-size") => void;
  onSuccess?: (avatarPath: string) => void;
}) => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: uploadImageAction,
    onSuccess(data) {
      onSuccess?.(data.image.path);
    },
  });

  const handleFileSelect = async () => {
    const file = await selectFile("image/*");

    if (!validateFileSize(file, AVATAR_MAX_SIZE)) {
      return onError?.("big-size");
    }

    const formData = new FormData();

    formData.set(AVATAR_FILE_KEY, file);

    await mutateAsync(formData);
  };

  return {
    isPending,
    handleFileSelect,
  };
};
