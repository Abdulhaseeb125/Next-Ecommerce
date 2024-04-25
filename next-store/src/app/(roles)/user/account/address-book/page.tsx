
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BiTrash } from "react-icons/bi"
import { LuFileEdit } from "react-icons/lu"

export default function Component() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-y-0">
        <CardTitle>Address book</CardTitle>
        <Button className="ml-auto" variant="secondary">
          Add new address
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Card>
              <CardHeader className="flex flex-row items-center">
                <CardTitle>Shipping address</CardTitle>
                <Button className="ml-auto" size="icon" variant="ghost">
                  <LuFileEdit className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button size="icon" variant="ghost">
                  <BiTrash className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="text-sm">
                  <div className="font-medium">Sophia Anderson</div>
                  <div>1234 Main St.</div>
                  <div>Anytown, CA 12345</div>
                  <div>United States</div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader className="flex flex-row items-center">
                <CardTitle>Billing address</CardTitle>
                <Button className="ml-auto" size="icon" variant="ghost">
                  <LuFileEdit className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button size="icon" variant="ghost">
                  <BiTrash className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="text-sm">
                  <div className="font-medium">Sophia Anderson</div>
                  <div>1234 Main St.</div>
                  <div>Anytown, CA 12345</div>
                  <div>United States</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


