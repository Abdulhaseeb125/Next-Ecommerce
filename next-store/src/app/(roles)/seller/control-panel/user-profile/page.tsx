import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { TableCell, TableRow, TableBody, Table } from "@/components/ui/table"
import Link from "next/link"
import Image from "next/image"

export default function Profile() {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>My Profile</CardTitle>
                    <CardDescription>Update your profile information below</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 relative">
                            <span className="flex items-center border justify-center h-12 w-12 rounded-full dark:bg-neutral-950  bg-slate-100 text-2xl font-bold">
                                {false ?
                                    <Image
                                        width={40}
                                        height={40}
                                        src={"/images/user/default_user.png"}
                                        className="  rounded-full "
                                        alt="User"
                                    />
                                    : "A"
                                }
                            </span>
                        </div>
                        <div className="grid gap-1.5">
                            <div className="font-semibold">Alice Johnson</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">alice@example.com</div>
                        </div>
                        <Button size="sm">Edit profile</Button>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input defaultValue="Alice Johnson" id="name" disabled={true} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input defaultValue="alice@example.com" id="email" disabled={true} />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card className="border shadow-sm">
                <CardHeader>
                    <CardTitle>Order History</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">#3210</TableCell>
                                <TableCell>Olivia Martin</TableCell>
                                <TableCell className="hidden md:table-cell">Online Store</TableCell>
                                <TableCell className="hidden md:table-cell">February 20, 2022</TableCell>
                                <TableCell className="text-right">$42.25</TableCell>
                                <TableCell className="hidden sm:table-cell">Shipped</TableCell>
                                <TableCell className="text-right">
                                    <Link className="underline" href="#">
                                        View order
                                    </Link>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">#3209</TableCell>
                                <TableCell>Ava Johnson</TableCell>
                                <TableCell className="hidden md:table-cell">Shop</TableCell>
                                <TableCell className="hidden md:table-cell">January 5, 2022</TableCell>
                                <TableCell className="text-right">$74.99</TableCell>
                                <TableCell className="hidden sm:table-cell">Paid</TableCell>
                                <TableCell className="text-right">
                                    <Link className="underline" href="#">
                                        View order
                                    </Link>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">#3204</TableCell>
                                <TableCell>Michael Johnson</TableCell>
                                <TableCell className="hidden md:table-cell">Shop</TableCell>
                                <TableCell className="hidden md:table-cell">August 3, 2021</TableCell>
                                <TableCell className="text-right">$64.75</TableCell>
                                <TableCell className="hidden sm:table-cell">Unfulfilled</TableCell>
                                <TableCell className="text-right">
                                    <Link className="underline" href="#">
                                        View order
                                    </Link>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">#3203</TableCell>
                                <TableCell>Lisa Anderson</TableCell>
                                <TableCell className="hidden md:table-cell">Online Store</TableCell>
                                <TableCell className="hidden md:table-cell">July 15, 2021</TableCell>
                                <TableCell className="text-right">$34.50</TableCell>
                                <TableCell className="hidden sm:table-cell">Shipped</TableCell>
                                <TableCell className="text-right">
                                    <Link className="underline" href="#">
                                        View order
                                    </Link>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">#3202</TableCell>
                                <TableCell>Samantha Green</TableCell>
                                <TableCell className="hidden md:table-cell">Shop</TableCell>
                                <TableCell className="hidden md:table-cell">June 5, 2021</TableCell>
                                <TableCell className="text-right">$89.99</TableCell>
                                <TableCell className="hidden sm:table-cell">Paid</TableCell>
                                <TableCell className="text-right">
                                    <Link className="underline" href="#">
                                        View order
                                    </Link>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">#3201</TableCell>
                                <TableCell>Adam Barlow</TableCell>
                                <TableCell className="hidden md:table-cell">Online Store</TableCell>
                                <TableCell className="hidden md:table-cell">May 20, 2021</TableCell>
                                <TableCell className="text-right">$24.99</TableCell>
                                <TableCell className="hidden sm:table-cell">Unfulfilled</TableCell>
                                <TableCell className="text-right">
                                    <Link className="underline" href="#">
                                        View order
                                    </Link>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">#3207</TableCell>
                                <TableCell>Sophia Anderson</TableCell>
                                <TableCell className="hidden md:table-cell">Shop</TableCell>
                                <TableCell className="hidden md:table-cell">November 2, 2021</TableCell>
                                <TableCell className="text-right">$99.99</TableCell>
                                <TableCell className="hidden sm:table-cell">Paid</TableCell>
                                <TableCell className="text-right">
                                    <Link className="underline" href="#">
                                        View order
                                    </Link>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">#3206</TableCell>
                                <TableCell>Daniel Smith</TableCell>
                                <TableCell className="hidden md:table-cell">Online Store</TableCell>
                                <TableCell className="hidden md:table-cell">October 7, 2021</TableCell>
                                <TableCell className="text-right">$67.50</TableCell>
                                <TableCell className="hidden sm:table-cell">Shipped</TableCell>
                                <TableCell className="text-right">
                                    <Link className="underline" href="#">
                                        View order
                                    </Link>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    )
}

