import { getProduct } from "@/components/data";
import { Avatar, Card } from "@heroui/react";
import Image from "next/image";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id, "id");
  const products = await getProduct();
  const product = products.find((p) => p.id == id);
  return (
    <div>
      <Card className="w-8/12 mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Image
              src={product.image}
              alt={product.name}
              width={250}
              height={200}
            ></Image>
          </div>
          <div>
            <Card.Header>
              <Card.Title>{product.name}</Card.Title>
              <Card.Description>{product.description}</Card.Description>
            </Card.Header>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetailsPage;
