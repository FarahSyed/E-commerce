import { Header } from "@/components/index";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  const products = [
    {
      id: 1,
      imageSrc: '/images/product-1.png',
      title: 'Graphic Design',
      description: 'English Department',
      price: 16.48,
      discountPrice: 6.48,
    },
    {
      id: 2,
      imageSrc: '/images/product-2.png',
      title: 'Graphic Design',
      description: 'English Department',
      price: 16.48,
      discountPrice: 6.48,
    },
    {
      id: 3,
      imageSrc: '/images/product-3.png',
      title: 'Graphic Design',
      description: 'English Department',
      price: 16.48,
      discountPrice: 6.48,
    },
    {
      id: 4,
      imageSrc: '/images/product-4.png',
      title: 'Graphic Design',
      description: 'English Department',
      price: 16.48,
      discountPrice: 6.48,
    },
    {
      id: 5,
      imageSrc: '/images/product-5.png',
      title: 'Graphic Design',
      description: 'English Department',
      price: 16.48,
      discountPrice: 6.48,
    },
    {
      id: 6,
      imageSrc: '/images/product-6.png',
      title: 'Graphic Design',
      description: 'English Department',
      price: 16.48,
      discountPrice: 6.48,
    },
    {
      id: 7,
      imageSrc: '/images/product-7.png',
      title: 'Graphic Design',
      description: 'English Department',
      price: 16.48,
      discountPrice: 6.48,
    },
    {
      id: 8,
      imageSrc: '/images/product-8.png',
      title: 'Graphic Design',
      description: 'English Department',
      price: 16.48,
      discountPrice: 6.48,
    },
  ]
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="h-[60vh] md:h-[100vh] bg-no-repeat bg-cover bg-top bg-blue-100 py-16 flex items-center" style={{ backgroundImage: "url('/images/shop-hero-1.jpg')" }}>
        <div className="container mx-auto px-4 text-white flex flex-col items-center md:items-start">
          <h5 className="text-xs md:text-sm font-semibold mb-8 text-center md:text-start">SUMMER 2020</h5>
          <h3 className="text-2xl md:text-5xl font-semibold mb-4 text-center md:text-start">NEW COLLECTION</h3>
          <p className="text-sm md:text-base mb-12 text-center md:text-start">We know how large objects will act, <br /> but things on a small scale.</p>
          <Button size="lg" className="bg-green-500 hover:bg-green-700 block items-center text-white font-bold">SHOP NOW</Button>
         

        </div>
      </section>

      {/* Editor's Pick */}
      <section className="py-16 bg-[#fafafa]">
        <div className="container mx-auto text-center flex flex-col items-center justify-center">
          <h2 className="text-3xl uppercase font-bold mb-3">EDITOR&apos;S PICK</h2>
          <p className="text-md font-light mb-10">Problems trying to resolve the conflict between </p>
          <div className="w-full md:w-9/12 grid grid-cols-1 md:grid-cols-4 gap-4">

          {/* First Column (One Large Card - Men) */}
          <div className=" space-y-2 md:col-span-2">
            <Card className="flex flex-col max-h-[60%] md:max-h-full max-w-[60%] md:max-w-full md:h-full rounded-none">
                <CardContent className="flex-1 p-0">
                  <div className="relative h-full">
                    <Image
                      width={640}
                      height={640}
                      src="/imaes/men.png"
                      alt="Men's fashion"
                      className="w-full h-full object-cover" // Fixed height for consistency
                    />
                    <div className="absolute bottom-4 left-4">
                      <Button variant="secondary" className="font-bold bg-white rounded-none">MEN</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
          </div>
        
          {/* Second Column (Women, Accessories, and Kids) */}
          <div className=" space-y-2">
            {/* Large Card - Women */}
            <Card className="flex flex-col max-h-[60%] md:max-h-full max-w-[60%] md:max-w-full md:h-full rounded-none">
                <CardContent className="flex-1 p-0">
                  <div className="relative h-full">
                    <Image
                      width={640}
                      height={256}
                      src="/images/women.png"
                      alt="Women's fashion"
                      className="w-full h-full object-cover" // Fixed height for consistency
                    />
                    <div className="absolute bottom-4 left-4">
                      <Button variant="secondary" className="font-bold bg-white rounded-none">WOMEN</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
          </div>
        
          {/* Stacked Cards (Accessories and Kids) */}
          <div className="space-y-4">
              {/* Accessories Card */}
              <div className="">
                <Card className="flex flex-col max-h-[60%] md:max-h-full max-w-[60%] md:max-w-full md:h-full rounded-none">
                    <CardContent className="flex-1 p-0">
                      <div className="relative h-full">
                        <Image
                          width={640}
                          height={256}
                          src="/images/accessories.png"
                          alt="Accessories"
                          className="w-full h-full object-cover" // Ensure it fills space
                        />
                        <div className="absolute bottom-4 left-4">
                          <Button variant="secondary" className="font-bold bg-white rounded-none">ACCESSORIES</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
              </div>


              {/* Kids Card */}
              <div className="">
                <Card className="flex flex-col max-h-[60%] md:max-h-full max-w-[60%] md:max-w-full md:h-full rounded-none">
                  <CardContent className="flex-1 p-0">
                    <div className="relative h-full">
                      <Image
                        width={640}
                        height={256}
                        src="/images/kids.png"
                        alt="Kids fashion"
                        className="w-full h-full object-cover" // Ensure it fills space
                      />
                      <div className="absolute bottom-4 left-4">
                        <Button variant="secondary" className="font-bold bg-white rounded-none">KIDS</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
        
          </div>
        </div>
        </section>


        {/* Best Seller Products */}
        <section className="py-16">
        <div className="container mx-auto text-center flex flex-col items-center justify-center">
          <h2 className="text-lg text-[#737373] mb-3">Featured Products</h2>
          <h2 className="text-3xl uppercase font-bold mb-3">Best Seller Products</h2>
          <p className="text-md font-light mb-10">Problems trying to resolve the conflict between </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {/* Product Cards */}
          {products.map(
            (product, index) => (
              <div key={index} className="w-[200px] h-[auto] mx-auto">
                <div className="w-full h-auto">
                  <div className="w-[200px]">
                    <Image src={product.imageSrc} alt={product.title} width={100} height={100} className="w-full" />
                  </div>
                  <div className="w-[200px] h-[230px] p-5 flex flex-col items-center justify-center gap-4">
    
                    <h5 className="w-full font-bold text-lg leading-6 text-center text-[#252B42]">
                      {product.title}
                    </h5>
                    <p className="w-full font-bold text-sm leading-6 text-center text-[#737373]">
                      {product.description}
                    </p>
                    <div className="w-full px-1.5 py-2.5 flex justify-center gap-2.5">
                      <h5 className="font-bold text-lg leading-6 text-[#BDBDBD]">
                        ${product.price}
                      </h5>
                      {product.discountPrice && (
                        <h5 className="font-bold text-lg leading-6 text-[#23856D]">
                          ${product.discountPrice}
                        </h5>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <div className="w-[20px] h-[20px] rounded-[50%] bg-[#23A6F0]"></div>
                      <div className="w-[20px] h-[20px] rounded-[50%] bg-[#23856D]"></div>
                      <div className="w-[20px] h-[20px] rounded-[50%] bg-[#E77C40]"></div>
                      <div className="w-[20px] h-[20px] rounded-[50%] bg-[#252B42]"></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
       </div>
       </section>


       {/* Vita Classic Product */}
       <section className="bg-[#23856D] flex items-center justify-center">
        <div className="container mx-auto px-8 pt-8 flex items-center justify-around flex-wrap">
          <div className="w-[30%] text-white min-w-[180px]">
            <h5 className="text-xs md:text-sm font-semibold mb-8 text-center md:text-start">SUMMER 2020</h5>
            <h3 className="text-2xl uppercase md:text-5xl font-semibold mb-4 text-center md:text-start">Vita Classic Product</h3>
            <p className="text-sm md:text-base mb-12 text-center md:text-start opacity-70">We know how large objects will act, We know<br /> how are objects will act, We know</p>

            <div className="flex items-center gap-2">
              <h5 className="text-sm md:text-sm font-bold text-center md:text-start">$16.48</h5>
              <Button size="lg" className="bg-green-500 hover:bg-green-700 uppercase text-white">Add to cart</Button>
            </div>
          

          </div>
          <Image src='/images/shop-hero-2.png' alt='Vita Classic' width={100} height={100} className="w-[30%] min-w-[180px]" />

        </div>
       </section>
        

       {/* Winter Clothes */}
       <section className=" flex items-center justify-center">
        <div className="container mx-auto px-8 pt-8 flex items-center justify-around flex-wrap">
          <Image src='/images/winter-clothes.jpg' alt='Vita Classic' width={100} height={100} className="w-[30%] min-w-[180px]" />
          <div className="w-[30%] min-w-[180px]">
            <h5 className="text-xs md:text-sm font-semibold text-gray-70 mb-8 text-center md:text-start">SUMMER 2020</h5>
            <h3 className="text-2xl uppercase md:text-5xl font-semibold mb-4 text-center md:text-start">Part of the Neural 
            Universe</h3>
            <p className="text-sm md:text-base mb-12 text-center md:text-start opacity-70">We know how large objects will act, <br />but things on a small scale.</p>

            <div className="flex items-center gap-2">
              <Button size="lg" className="bg-green-500 hover:bg-green-700 uppercase ">Buy Now</Button>
              <Button size="lg" className="text-green-500 border-green-500 hover:text-green-700 uppercase ">Read more</Button>
            </div>
          

          </div>

        </div>
       </section>
        

    </main>
  );
}
