import { Counter } from "@/app/components"

type Props = {
  title: string
  placeholder: string
  name: string
}

export const SelectAmountItem = ({title, placeholder, name }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <h3 className="underline font-medium">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">
          {placeholder}
        </p>
      </div>
      <Counter name={name} />
    </div>
  )
}