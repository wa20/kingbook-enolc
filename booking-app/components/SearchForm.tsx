"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BedDoubleIcon, CalendarDaysIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export const formSchema = z.object({
    location: z.string().min(2, "Must be 2 characters or more").max(50),
    dates: z.object({
      from: z.date(),
      to: z.date(),
    }),
    adults: z
      .string()
      .min(1, {
        message: "Please select at least 1 adult",
      })
      .max(12, { message: "Max 12 adults Occupancy" }),
    children: z.string().min(0).max(12, {
      message: "Max 12 children Occupancy",
    }),
    rooms: z.string().min(1, {
      message: "Please select at least 1 room",
    }),
  });

const SearchForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      dates: {
        from: undefined,
        to: undefined,
      },
      adults: "1",
      children: "0",
      rooms: "1",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <div>
      <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row lg:max-w-6xl lg:mx-auto items-center justify-center space-x-0 lg:space-x-2 space-y-4 lg:space-y-0 rounded-lg"
      >
          <div className="grid w-full lg:max-w-sm items-center gap-1.5">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" flex text-white">
                    Location
                    <BedDoubleIcon className="ml-2 h-4 w-4 text-white"/>
                  </FormLabel>

                  <FormMessage />

                  <FormControl>
                    <Input placeholder="Manchester, UK" {...field} />
                  </FormControl> 
                </FormItem>
              )}
            />
          </div>
          <div className="grid w-full lg-max-w-sm felx-1 items-center gap-1.5">
             <FormField
              control={form.control}
              name="dates"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className=" flex text-white">
                    Dates
                    <CalendarDaysIcon className="ml-2 h-4 w-4 text-white"/>
                  </FormLabel>
                  <FormMessage />

                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>

                        

                      </FormControl>
                    </PopoverTrigger>
                  </Popover>

                </FormItem>

              )}
             >

             </FormField>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SearchForm;
