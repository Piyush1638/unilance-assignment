"use client";

import { Checkbox } from "@/components/ui/checkbox";

export function CheckboxWithText({label, htmlfor, className}:{label:string, htmlfor:string, className:string}) {
  return (
    <div className="flex items-center space-x-2 my-4">
      <Checkbox id={htmlfor} />
      <label
        htmlFor={htmlfor}
        className={className}
      >
        {label}
      </label>
    </div>
  );
}
