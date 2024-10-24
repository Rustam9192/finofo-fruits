import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

interface ListBoxProps {
  items: string[];
  defaultValue?: string; // Optional prop
  onSelect: (item: string) => void;
}

export default function ListBox({
  items,
  onSelect,
  defaultValue,
}: ListBoxProps) {
  const [selected, setSelected] = useState(
    defaultValue && items.includes(defaultValue) ? defaultValue : items[0],
  );

  const handleSelect = (item: string) => {
    setSelected(item);
    onSelect(item);
  };

  return (
    <Listbox value={selected} onChange={handleSelect}>
      <ListboxButton
        className={clsx(
          "text-dark relative block h-10 w-full rounded-lg bg-theme-light py-1 pl-3 pr-10 text-left text-sm capitalize outline-none",
        )}
      >
        {selected}
        <ChevronDownIcon
          className="group pointer-events-none absolute right-3 top-1/2 w-6 -translate-y-1/2"
          aria-hidden="true"
        />
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        className={clsx(
          "w-[var(--button-width)] border border-theme-grey/10 bg-theme-light shadow-theme outline-none [--anchor-gap:var(--spacing-1)]",
        )}
      >
        {items.map((item) => (
          <ListboxOption
            key={item}
            value={item}
            className="group flex cursor-pointer select-none items-center gap-1 p-2 capitalize hover:bg-theme-prime/10"
          >
            <CheckIcon className="invisible size-4 group-data-[selected]:visible" />
            <div className="text-sm">{item}</div>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}
