/* eslint-disable react/prop-types */
"use client";

import * as React from "react";
import { X } from "lucide-react";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Button } from "@/components/shadcn/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/shadcn/command";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/shadcn/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/popover";

// const statuses = [
//   {
//     value: "backlog",
//     label: "Backlog",
//   },
//   {
//     value: "todo",
//     label: "Todo",
//   },
//   {
//     value: "in progress",
//     label: "In Progress",
//   },
//   {
//     value: "done",
//     label: "Done",
//   },
//   {
//     value: "canceled",
//     label: "Canceled",
//   },
// ]

export function ComboBoxResponsive({ options, title }) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedStatus, setSelectedStatus] = React.useState(null);

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-[150px] justify-start bg-[#121212] text-white"
          >
            {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set {title}</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <StatusList
            setOpen={setOpen}
            setSelectedStatus={setSelectedStatus}
            selectedStatus={selectedStatus}
            options={options}
          />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="justify-start bg-[#121212] text-white"
        >
          {selectedStatus ? (
            <span>
              <X />
            </span>
          ) : (
            <>+</>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <StatusList
            setOpen={setOpen}
            setSelectedStatus={setSelectedStatus}
            selectedStatus={selectedStatus}
            options={options}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function StatusList({ setOpen, setSelectedStatus, selectedStatus, options }) {
  return (
    <Command>
      <CommandInput placeholder="Filter status..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {options.map((option) => (
            <CommandItem
              key={option.value}
              value={option.value}
              onSelect={(value) => {
                const isCurrentlySelected = selectedStatus?.value === value;
                if (isCurrentlySelected) {
                  setSelectedStatus(null);
                } else {
                  setSelectedStatus(
                    options.find((selection) => selection.value === value) ||
                      null,
                  );
                }
                setOpen(false);
              }}
              className="flex items-center justify-between"
            >
              <span>{option.label}</span>
              {selectedStatus?.value === option.value && (
                <X className="h-4 w-4" />
              )}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

// StatusList.propTypes = {
//   setOpen: PropTypes.func.isRequired,
//   setSelectedStatus: PropTypes.func.isRequired
// }
