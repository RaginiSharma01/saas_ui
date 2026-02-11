"use client";


import { X } from "lucide-react";
import { ReactNode, useCallback } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title?: string | React.ReactElement;
  content: ReactNode;
  className?: string;
  headerClassName?: string;
  classNameForTitle?: string;
  preventClose?: boolean;
}

const Modal = ({
  open,
  setOpen,
  title,
  content,
  className,
  headerClassName,
  classNameForTitle,
  preventClose,
}: ModalProps) => {
  const isMobile = useIsMobile();

  // Handle open change - allow closing through button, prevent closing by clicking outside
  const handleOpenChange = useCallback(
    (newOpen: boolean) => {
      // If preventClose is true and trying to close via backdrop/outside click, block it
      if (preventClose && !newOpen) {
        return;
      }
      setOpen(newOpen);
    },
    [preventClose, setOpen],
  );

  // Separate handler for close button - always allow closing via button
  const handleCloseButton = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

//   if (isMobile) {
//     return (
//       <Drawer open={open} onOpenChange={handleOpenChange}>
//         <DrawerContent
//           className={`flex h-auto max-h-[90vh] flex-col !rounded-t-2xl border-[var(--color-border-accent)] bg-[var(--color-bg-mobile-modal)] px-4 py-4 text-gray-200 sm:px-6 ${className || ""} pt-0`}
//         >
//           {/* Fixed Header */}
//           <DrawerHeader
//             className={`border-b border-[rgba(255,255,255,0.1)] bg-[var(--color-bg-mobile-modal)] ${headerClassName || ""} relative flex flex-shrink-0 justify-center`}
//           >
//             <button
//               onClick={handleCloseButton}
//               className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400 transition hover:text-gray-200"
//             >
//               <X size={20} />
//             </button>
//             {title && <DrawerTitle>{title}</DrawerTitle>}
//           </DrawerHeader>

//           {/* Only this section scrolls */}
//           {/* <div className="mt-4 px-1 sm:px-2 overflow-y-auto flex-grow"> */}
//           {content}
//           {/* </div> */}
//         </DrawerContent>
//       </Drawer>
//     );
//   }

  return (
    <div className="bg-gray-500">
        <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className={className}>
        <div
          className={`flex items-center justify-between ${headerClassName || ""}`}
        >
          {title && (
            <div
              className={`subtitle_semibold text-text-light/90 ${classNameForTitle || ""}`}
            >
              {title}
            </div>
          )}
          {/* Close button - always closeable */}
          <button
            onClick={handleCloseButton}
            className="flex-shrink-0 text-gray-400 transition hover:text-gray-200 focus:outline-0"
          >
            <X size={20} className="text-gray-200" />
          </button>
        </div>
        <div className="pt-6">{content}</div>
      </DialogContent>
    </Dialog>

    </div>    
);
};

export default Modal;
