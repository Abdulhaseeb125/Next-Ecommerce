/**
 * v0 by Vercel.
 * @see https://v0.dev/t/HWrDhEFuds4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { FiMoreHorizontal } from "react-icons/fi"

export default function MyOrders() {
    return (
        <div className="flex flex-col">
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                <div className="border shadow-sm rounded-lg p-2">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Order</TableHead>
                                <TableHead className="min-w-[150px]">Customer</TableHead>
                                <TableHead className="hidden md:table-cell">Channel</TableHead>
                                <TableHead className="hidden md:table-cell">Date</TableHead>
                                <TableHead className="text-right">Total</TableHead>
                                <TableHead className="hidden sm:table-cell">Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">#3210</TableCell>
                                <TableCell>Olivia Martin</TableCell>
                                <TableCell className="hidden md:table-cell">Online Store</TableCell>
                                <TableCell className="hidden md:table-cell">February 20, 2022</TableCell>
                                <TableCell className="text-right">$42.25</TableCell>
                                <TableCell className="hidden sm:table-cell">Shipped</TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button size="icon" variant="ghost">
                                                <FiMoreHorizontal size={24} />
                                                <span className="sr-only">Actions</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>View order</DropdownMenuItem>
                                            <DropdownMenuItem>Customer details</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
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
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button size="icon" variant="ghost">
                                                <FiMoreHorizontal size={24} />
                                                <span className="sr-only">Actions</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>View order</DropdownMenuItem>
                                            <DropdownMenuItem>Customer details</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
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
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button size="icon" variant="ghost">
                                                <FiMoreHorizontal size={24} />
                                                <span className="sr-only">Actions</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>View order</DropdownMenuItem>
                                            <DropdownMenuItem>Customer details</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
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
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button size="icon" variant="ghost">
                                                <FiMoreHorizontal size={24} />
                                                <span className="sr-only">Actions</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>View order</DropdownMenuItem>
                                            <DropdownMenuItem>Customer details</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </main>
        </div>
    )
}
