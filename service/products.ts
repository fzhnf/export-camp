import type { Product } from "@/types/product";

export function productService() {
  const { $api } = useNuxtApp();
  const baseUrl = "/products";

  return {
    getOne: (id: number) => {
      return $api<Product>(`${baseUrl}/${id}`);
    },
    update: (id: number, body: { title: string }) => {
      return $api<Product>(`${baseUrl}/${id}`, {
        method: "PUT",
        body: JSON.stringify(body),
      });
    },
  };
}
