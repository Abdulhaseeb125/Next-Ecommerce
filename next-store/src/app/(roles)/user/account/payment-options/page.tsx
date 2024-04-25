import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { BsTrash } from "react-icons/bs"
import { LuFileEdit } from "react-icons/lu"
import { BiCreditCardFront } from "react-icons/bi"

export default function Component() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Payment methods</CardTitle>
                <CardDescription>Manage your saved payment methods.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <BiCreditCardFront className="h-6 w-6" />
                        <div className="text-sm">
                            <div>Visa ending in 4242</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Expires 09/2023</div>
                        </div>
                        <Button className="ml-auto" size="icon">
                            <LuFileEdit className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                        </Button>
                        <Button size="icon" variant={"destructive"}>
                            <BsTrash className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                        </Button>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-2">
                        <BiCreditCardFront className="h-6 w-6" />
                        <div className="text-sm">
                            <div>Mastercard ending in 1234</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Expires 11/2024</div>
                        </div>
                        <Button className="ml-auto" size="icon">
                            <LuFileEdit className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                        </Button>
                        <Button size="icon" variant={"destructive"}>
                            <BsTrash className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                        </Button>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button variant="outline">Add payment method</Button>
            </CardFooter>
        </Card>
    )
}
