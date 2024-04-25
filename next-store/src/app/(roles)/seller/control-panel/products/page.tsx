"use client";

import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";
import { BiPlus, BiTrash } from "react-icons/bi";
import axios from "@/Axios";
import { useEffect, useState } from "react";
import Pagination from "./paginate";
import { date } from "joi";
import Image from "next/image";
import path from "path";
// import { Pagination } from "@/components/ui/pagination";

export default function Products() {
  const [products, setProducts]: any = useState([]); // State to store fetched products
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const [perPage, setPerPage] = useState(10); // Products per page
  const [totalPages, setTotalPages] = useState(1); // Total pages (initially set to 1)

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get(
        `http://localhost:3000/api/seller/products?page=${currentPage}&per_page=${perPage}`
      );
      const data = JSON.parse(response.data);
      setProducts(data.products);
      setTotalPages(Math.ceil(data.totalPages || 1 / perPage)); // Calculate totalPages from API response (if available) or use a default value
      console.log(data);
    }

    getProducts();
  }, [currentPage, perPage]); // Re-fetch data on page/per_page change

  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  const handlePerPageChange = (itemsPerPage: any) => {
    setPerPage(itemsPerPage);
    // Recalculate totalPages based on new perPage value (optional)
  };

  return (
    <Card>
      <CardHeader className="flex flex-row justify-between gap-4">
        <CardTitle className="text-3xl">Products</CardTitle>
        <div className="flex flex-row items-center space-x-2">
          <Button size="sm">
            <BiPlus size={22} />
          </Button>
          {false ? ( // Remove the conditional rendering for delete button if needed
            <Button size="sm" variant="destructive">
              <BiTrash size={20} />
            </Button>
          ) : (
            ""
          )}
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 p-0">
        <div className="w-full rounded-lg border">

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Image</TableHead>
                <TableHead className="flex-1">Title</TableHead>
                <TableHead className="w-[120px]">Price</TableHead>
                <TableHead className="w-[120px]">Stock</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product: any) => (
                <TableRow key={product.product_id}>
                  <TableCell className="text-sm">
                    <Image src={`${product.images[0].image_url}`} width={40} height={40} alt="" />
                  </TableCell>
                  <TableCell className="font-medium">{product.product_title}</TableCell>
                  <TableCell>${product.price}</TableCell>
                  <TableCell>{product.stock_quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages} // Use the calculated totalPages state
          perPage={perPage}
          onPageChange={handlePageChange}
          onPerPageChange={handlePerPageChange}
        />
      </CardContent>
    </Card>
  );
}
