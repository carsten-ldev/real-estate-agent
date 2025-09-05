"use client"

import { useRef, useEffect } from "react"

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
};

export default function Modal({ 
    children, 
    isOpen, 
    onClose, 
    title, 
    description,
    size = 'lg'
}: ModalProps) {
    const dialogRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        const dialog = dialogRef.current
        if (!dialog) return

        if (isOpen) {
            dialog.showModal()
        } else {
            dialog.close()
        }

        // Handle escape key and backdrop click
        const handleClose = (e: Event) => {
            if (e.target === dialog) {
                onClose()
            }
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        dialog.addEventListener('click', handleClose)
        dialog.addEventListener('keydown', handleKeyDown)

        return () => {
            dialog.removeEventListener('click', handleClose)
            dialog.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen]) // Remove onClose from dependencies to prevent recreating

    const sizeClasses = {
        sm: 'max-w-md',
        md: 'max-w-2xl',
        lg: 'max-w-4xl',
        xl: 'max-w-6xl',
        full: 'max-w-full w-full h-full'
    }

    return (
        <dialog 
            ref={dialogRef}
            className="backdrop:bg-black backdrop:bg-opacity-50 bg-transparent p-0 m-0 max-w-none max-h-none w-full h-full"
        >
            <div className={` ${sizeClasses[size]} mx-auto max-h-[90vh] relative overflow-hidden`}>
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-600 hover:text-gray-800 transition-colors"
                    aria-label="Close modal"
                >
                    <span className="text-xl leading-none">&times;</span>
                </button>

                <div className="max-h-[90vh] overflow-hidden">
                    {title && (
                        <div className="mb-4">
                            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                            {description && (
                                <p className="text-gray-600 mt-1">{description}</p>
                            )}
                        </div>
                    )}
                    {children}
                </div>
            </div>
        </dialog>
    )
}