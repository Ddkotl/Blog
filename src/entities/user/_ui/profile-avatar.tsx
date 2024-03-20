import { Avatar, AvatarFallback } from "@/shared/ui/avatar";
import { cn } from "@/shared/ui/utils";
import { Profile } from "../_domain/types";
import { getProfileLetters } from "../_vm/get-profile-letters";

export const ProfileAvatar = ({
  profile,
  className,
}: {
  profile?: Profile;
  className?: string;
}) => {
  if (!profile) {
    return null;
  }
  return (
    <Avatar className={cn(className)}>
      <AvatarFallback>{getProfileLetters(profile)}</AvatarFallback>
    </Avatar>
  );
};
