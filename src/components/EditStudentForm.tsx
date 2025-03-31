// 'use client';

// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { todoFormSchema, TodoFormValues } from "@/schema";
// import { updateTodoAction } from "@/actions/todo.actions";
// import { Checkbox } from "@/components/ui/checkbox";
// import Spinner from "./Spinner";
// import { useState } from "react";
// import { Pen } from "lucide-react";
// import { ITodo } from "@/interfaces";

// const EditTodoForm = ({ todo }: { todo: ITodo }) => {
//   const [loading, setLoading] = useState(false);
//   const [open, setOpen] = useState(false);

//   const defaultValues: Partial<TodoFormValues> = {
//     title: todo.title,
//     body: todo.body as string,
//     completed: todo.completed,
//   };

//   const form = useForm<TodoFormValues>({
//     resolver: zodResolver(todoFormSchema),
//     defaultValues,
//     mode: "onChange",
//   });

//   const onSubmit = async (data: TodoFormValues) => {
//     setLoading(true);
//     await updateTodoAction({id: todo.id, title: data.title, body: data.body as string, completed: data.completed})
//     setLoading(false);
//     setOpen(false);
//   };

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger asChild>
//         <Button size={"icon"}>
//         <Pen size={16} />
//       </Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Edit Todo</DialogTitle>
//         </DialogHeader>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//             <FormField
//               control={form.control}
//               name="title"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Title</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Go to Collage ..." {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="body"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Short Description</FormLabel>
//                   <FormControl>
//                     <Textarea
//                       placeholder="Tell us a little bit about yourself"
//                       className="resize-none"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormDescription>
//                     You can write a short description about your next todo.
//                   </FormDescription>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="completed"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormControl>
//                     <Checkbox checked={field.value} onCheckedChange={field.onChange} />
//                   </FormControl>
//                   <FormLabel>Completed</FormLabel>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button type="submit" disabled={loading}>{loading ? <><Spinner /> Saving</> : "Save changes"}</Button>
//           </form>
//         </Form>
//         <DialogFooter>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default EditTodoForm;
