import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "./ui/separator";

type props = {
  name: string | undefined;
  icon: string | undefined;
};

function Nav({ name, icon }: props) {
  const profile = `"${icon}"`;

  return (
    <header>
      <div className="flex flex-row items-center justify-around p-6">
        <div className="flex flex-row gap-4 items-center">
          <Avatar className="w-14 h-14">
            <AvatarImage src={profile} alt="profile pic" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <small className="text-lg">Hi, {name ? name : "User"}</small>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <a href="/auth/logout">
            <Button variant={"destructive"}>Sign Out</Button>
          </a>
        </div>
      </div>
      <Separator className="mb-4 " />
    </header>
  );
}
export default Nav;
