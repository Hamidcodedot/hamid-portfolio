"use client";

import { useRef } from "react";
import { toast } from "react-hot-toast";

export default function ClientForm({ 
  action, 
  children, 
  className 
}: { 
  action: (formData: FormData) => Promise<void>;
  children: React.ReactNode; 
  className?: string;
}) {
  const ref = useRef<HTMLFormElement>(null);
  
  const clientAction = async (formData: FormData) => {
    const loadingToast = toast.loading("Processing...");
    try {
      await action(formData);
      toast.success("Success!", { id: loadingToast });
      ref.current?.reset();
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || "An error occurred.", { id: loadingToast });
    }
  };

  return (
    <form ref={ref} action={clientAction} className={className}>
      {children}
    </form>
  );
}
