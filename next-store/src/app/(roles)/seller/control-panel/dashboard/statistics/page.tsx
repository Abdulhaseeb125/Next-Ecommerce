import React from "react";
import { Metadata } from "next";
import { BiDollarCircle } from "react-icons/bi";
import Card from "@/components/Custom/Card";
import { CgShoppingCart,CgUserAdd } from "react-icons/cg"
import DetailsTable from "@/components/seller/Tables/DashboardTables";
import MyResponsiveLine from "@/components/seller/Charts/NivoLine";
import { Label } from "@/components/ui/label";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};
export default async function Dashboard() {

  return (
    <div className="flex flex-col gap-3">
      <div className=" lg:justify-center flex  flex-wrap md:flex-row flex-col lg:gap-y-3 gap-2">
        <div className="grid md:grid-cols-3  w-full gap-3 ">
          <Card
            icon={<BiDollarCircle size={52} />}
            title="Revenue"
            count={3499}
            data={[{
              id: "Desktop",
              data: [
                { x: "Jan", y: 43 },
                { x: "Feb", y: 117 },
                { x: "Mar", y: 61 },
                { x: "Apr", y: 145 },
                { x: "May", y: 126 },
                { x: "Jun", y: 104 },
                { x: "july", y: 224 },
                { x: "Aug", y: 144 },
                { x: "Sep", y: 204 },
              ],
            }]}
          />
          <Card
            icon={<CgShoppingCart size={52} />}
            title="Orders"
            count={2399}
            data={[{
              id: "Desktop",
              data: [
                { x: "Jan", y: 33 },
                { x: "Feb", y: 107 },
                { x: "Mar", y: 61 },
                { x: "Apr", y: 145 },
                { x: "May", y: 56 },
                { x: "Jun", y: 154 },
                { x: "july", y: 124 },
                { x: "Aug", y: 134 },
                { x: "Sep", y: 304 },
              ],
            }]}
          />
          <Card
            icon={<CgUserAdd size={52} />}
            title="Customers"
            count={199}
            data={[{
              id: "Desktop",
              data: [
                { x: "Jan", y: 43 },
                { x: "Feb", y: 137 },
                { x: "Mar", y: 61 },
                { x: "Apr", y: 145 },
                { x: "May", y: 26 },
                { x: "Jun", y: 154 },
                { x: "july", y: 224 },
                { x: "Aug", y: 134 },
                { x: "Sep", y: 404 },
              ],
            }]} />
        </div>
      </div>
      <div className="grid lg:grid-cols-[60%,39.5%] gap-2">

        <div className="p-5 bg-slate-50 dark:bg-neutral-900 rounded-md border shadow-md">
          <div className="flex flex-col">
            <Label className="text-sm font-medium">Page Views</Label>
            <Label className="text-2xl font-bold">23,456</Label>
          </div>
          < MyResponsiveLine className="aspect-[2/1]" />
        </div>
        <div className="bg-slate-50 dark:bg-neutral-900 rounded-md border shadow-md">
          <DetailsTable />
        </div>
      </div>
    </div>
  );
}
