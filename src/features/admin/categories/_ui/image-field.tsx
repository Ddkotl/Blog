import { Button } from "@/shared/ui/button";
//import { selectFile } from "@/shared/lib/file";
import { CategoryImage } from "@/entities/category/category";
import { Spinner } from "@/shared/ui/spinner";
import { useUploadImage } from "../_vm/use-upload-image";

export function ImageField({
  value,
  onChange,
}: {
  value?: string;
  onChange: (value?: string) => void;
}) {
  const { handleFileSelect, isPending } = useUploadImage({
    onSuccess: onChange,
  });

  return (
    <Button
      variant="ghost"
      className="w-[84px] h-[84px] p-0.5 rounded-full relative block"
      type="button"
      onClick={handleFileSelect}
    >
      {isPending && (
        <div className="inset-0 absolute flex items-center justify-center z-10">
          <Spinner className="w-10 h-10" aria-label="Загрузка изображения" />
        </div>
      )}
      <CategoryImage
        className="w-full h-full"
        category={{ name: "", description: "", image: value }}
      />
    </Button>
  );
}
