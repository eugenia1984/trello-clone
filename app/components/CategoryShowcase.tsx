import Image from "next/image"

import { categoryItems } from "../lib/categoryItems"

export function CategoryShowcase({categoryName}: {categoryName: string}) {
  const category = categoryItems.find((item ) => item.name === categoryName)

  return(
    <section className="flex items-center">
      <Image 
        src={category?.imageUrl as string}
        alt="category image"
        width={44}
        height={44}
      />
      <section className="flex flex-col ml-4">
        <h3 className="font-medium">{category?.title}</h3>
        <p className="font-small text-muted-foreground">{category?.description}</p>
      </section>
    </section>
  )
}