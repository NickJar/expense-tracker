import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "./ui/separator";

function Nav() {
  return (
    <header>
      <div className="flex flex-row items-center justify-around p-6">
        <div className="flex flex-row gap-4 items-center">
          <Avatar className="w-14 h-14">
            <AvatarImage src="/profile.png" alt="profile pic" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <small className="text-lg">Hi, Nick</small>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <Button className="bg-red-600 hover:bg-red-400">Sign Out</Button>
        </div>
      </div>
      <Separator className="mb-4 " />
    </header>
  );
}
export default Nav;
