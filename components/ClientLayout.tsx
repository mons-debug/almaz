"use client";
import { ToastContainer } from "./Toast";
import { useToast } from "@/lib/useToast";
import { createContext, useContext } from "react";

const ToastContext = createContext<ReturnType<typeof useToast> | null>(null);

export function useToastContext() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToastContext must be used within ToastProvider");
  }
  return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const toast = useToast();

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <ToastContainer 
        toasts={toast.toasts.map(t => ({ 
          ...t, 
          onRemove: toast.removeToast 
        }))} 
      />
    </ToastContext.Provider>
  );
}


