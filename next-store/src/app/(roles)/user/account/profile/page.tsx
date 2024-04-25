import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BiUser } from "react-icons/bi"
import { Label } from "@/components/ui/label"
import { auth } from "@/lib/auth"


export default async function UserProfile() {
    const session = await auth();
    


    return (
        <Card className="w-full">
            <CardHeader className="flex flex-row items-center gap-2 pb-10">
                <div>
                    <BiUser size={40} />
                </div>
                <Label className="text-2xl">User Profile</Label>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12 border">
                        <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1.5">
                        <div className="flex items-center space-x-2">
                            <div className="font-medium">{session?.user?.name}</div>
                            <Badge className="text-xs">User</Badge>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{session?.user?.email}</div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <div className="font-medium">City:</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Lahore</div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <div className="font-medium">Phone:</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">+92321-0000110</div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <div className="font-medium">Birthday:</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Not Added</div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <div className="font-medium">Joined On:</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">12/01/2024</div>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button size="sm">Edit Profile</Button>
            </CardFooter>
        </Card>
    )
}

