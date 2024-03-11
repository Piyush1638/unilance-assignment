
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectOption({ items, placeholder}:{items: string[], placeholder: string}) {
  return (
    <Select>
      <SelectTrigger className="tablet:w-[264px] tablet:h-10 w-[210.76px] h-7">
        <SelectValue placeholder={placeholder}/>
      </SelectTrigger>
      <SelectContent>
        {
            items.map((item,index) => {
                return <SelectItem key={index} value={item}>{item}</SelectItem>;
            })
        }
      </SelectContent>
    </Select>
  );
}
