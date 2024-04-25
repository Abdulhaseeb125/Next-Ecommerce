import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function SellerForm() {
    return (
        <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2">
                <h1 className="text-4xl font-bold">Become a Seller</h1>
                <p className="text-gray-500 dark:text-gray-400">Enter your information to apply to become a seller</p>
            </div>
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="full-name">Full name</Label>
                        <Input id="full-name" placeholder="Enter your full name" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="Enter your email" required type="email" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" placeholder="Enter your phone" required type="tel" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="business-name">Business name</Label>
                        <Input id="business-name" placeholder="Enter your business name" required />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="tax-id">Tax ID</Label>
                        <Input id="tax-id" placeholder="Enter your tax ID" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input id="website" placeholder="Enter your website" required />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="address">Business address</Label>
                    <Input id="address" placeholder="Enter your address" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="description">Brief description of products/services</Label>
                    <Textarea id="description" placeholder="Enter your description" required />
                </div>
                <Button type="submit">Apply</Button>
            </div>
        </div>
    )
}

